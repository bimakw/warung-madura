"use client";

import Link from "next/link";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link href={`/produk/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <div className="h-48 bg-amber-50 flex items-center justify-center text-6xl">
          {product.category === "Makanan" && "🍜"}
          {product.category === "Minuman" && "🥤"}
          {product.category === "Sembako" && "🛒"}
          {product.category === "Rokok" && "🚬"}
          {product.category === "Kebersihan" && "🧼"}
        </div>
        <div className="p-4">
          <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
            {product.category}
          </span>
          <h3 className="font-semibold text-lg mt-2 text-gray-800">{product.name}</h3>
          <p className="text-gray-500 text-sm mt-1">{product.description}</p>
          <div className="flex justify-between items-center mt-4">
            <span className="font-bold text-amber-600 text-lg">
              {formatPrice(product.price)}
            </span>
            <button
              onClick={handleAddToCart}
              className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors text-sm font-medium"
            >
              + Keranjang
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-2">Stok: {product.stock}</p>
        </div>
      </div>
    </Link>
  );
}
