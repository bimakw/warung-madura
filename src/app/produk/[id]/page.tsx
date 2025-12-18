import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";
import ProductDetail from "./ProductDetail";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Produk Tidak Ditemukan
          </h1>
          <p className="text-gray-500 mb-4">
            Produk yang Anda cari tidak tersedia
          </p>
          <Link
            href="/produk"
            className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors"
          >
            Kembali ke Katalog
          </Link>
        </div>
      </div>
    );
  }

  return <ProductDetail product={product} />;
}
