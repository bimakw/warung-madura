"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};

const getCategoryEmoji = (category: string) => {
  switch (category) {
    case "Makanan":
      return "🍜";
    case "Minuman":
      return "🥤";
    case "Sembako":
      return "🛒";
    case "Rokok":
      return "🚬";
    case "Kebersihan":
      return "🧼";
    default:
      return "📦";
  }
};

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const router = useRouter();
  const { addToCart } = useCart();

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-amber-600">
              Beranda
            </Link>
            <span>/</span>
            <Link href="/produk" className="hover:text-amber-600">
              Produk
            </Link>
            <span>/</span>
            <span className="text-gray-800">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Image */}
            <div className="bg-amber-50 rounded-lg flex items-center justify-center min-h-[300px] md:min-h-[400px]">
              <span className="text-9xl">{getCategoryEmoji(product.category)}</span>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <span className="text-sm bg-amber-100 text-amber-800 px-3 py-1 rounded-full w-fit">
                {product.category}
              </span>

              <h1 className="text-3xl font-bold text-gray-800 mt-4">
                {product.name}
              </h1>

              <p className="text-gray-500 mt-4 text-lg">{product.description}</p>

              <div className="mt-6">
                <span className="text-4xl font-bold text-amber-600">
                  {formatPrice(product.price)}
                </span>
              </div>

              <div className="mt-4 flex items-center gap-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    product.stock > 10
                      ? "bg-green-100 text-green-800"
                      : product.stock > 0
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {product.stock > 10
                    ? "Stok Tersedia"
                    : product.stock > 0
                    ? `Sisa ${product.stock} item`
                    : "Stok Habis"}
                </span>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="flex-1 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Tambah ke Keranjang
                </button>
                <button
                  onClick={() => router.push("/keranjang")}
                  className="flex-1 border-2 border-amber-600 text-amber-600 px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors font-medium"
                >
                  Lihat Keranjang
                </button>
              </div>

              <div className="mt-8 border-t pt-6">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Informasi Produk
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Kategori</span>
                    <span className="font-medium">{product.category}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Stok</span>
                    <span className="font-medium">{product.stock} item</span>
                  </li>
                  <li className="flex justify-between">
                    <span>ID Produk</span>
                    <span className="font-medium">#{product.id}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Produk Serupa
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="mt-8">
          <Link
            href="/produk"
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700"
          >
            <span>←</span>
            <span>Kembali ke Katalog</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
