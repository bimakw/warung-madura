"use client";

import Link from "next/link";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

const categoryEmoji: Record<string, string> = {
  Makanan: "🍜",
  Minuman: "🥤",
  Sembako: "🛒",
  Rokok: "🚬",
  Kebersihan: "🧼",
  Umum: "📦",
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [isAdding, setIsAdding] = useState(false);

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
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 500);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const inWishlist = isInWishlist(product.id);
  const emoji = categoryEmoji[product.category] || "📦";

  return (
    <Link href={`/produk/${product.id}`} className="group block">
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl dark:shadow-gray-900/30 transition-all duration-300 hover:-translate-y-1">
        {/* Image/Emoji Section */}
        <div className="relative h-44 bg-gradient-to-br from-indigo-50 via-blue-50 to-sky-100 dark:from-gray-700 dark:via-gray-700 dark:to-gray-600 flex items-center justify-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-2 left-2 text-3xl opacity-20">{emoji}</div>
            <div className="absolute bottom-2 right-2 text-3xl opacity-20">{emoji}</div>
          </div>

          {/* Main Emoji */}
          <span className="text-6xl transform group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
            {emoji}
          </span>

          {/* Wishlist Button */}
          <button
            onClick={handleToggleWishlist}
            className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm ${
              inWishlist
                ? "bg-rose-500 text-white scale-110"
                : "bg-white/80 dark:bg-gray-800/80 text-gray-400 hover:text-rose-500 hover:scale-105"
            }`}
            aria-label={inWishlist ? "Hapus dari favorit" : "Tambah ke favorit"}
          >
            <span className="text-lg">{inWishlist ? "❤️" : "🤍"}</span>
          </button>

          {/* Stock Badge */}
          {product.stock <= 5 && product.stock > 0 && (
            <span className="absolute top-3 left-3 px-2 py-1 bg-amber-500 text-white text-xs font-medium rounded-full">
              Sisa {product.stock}
            </span>
          )}
          {product.stock === 0 && (
            <span className="absolute top-3 left-3 px-2 py-1 bg-rose-500 text-white text-xs font-medium rounded-full">
              Habis
            </span>
          )}
        </div>

        {/* Content Section */}
        <div className="p-4">
          {/* Category Badge */}
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-indigo-900/40 dark:to-blue-900/40 text-indigo-700 dark:text-indigo-300 text-xs font-medium rounded-full">
            {emoji} {product.category}
          </span>

          {/* Product Name */}
          <h3 className="font-semibold text-lg mt-2.5 text-gray-800 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1.5 line-clamp-2 min-h-[2.5rem]">
            {product.description}
          </p>

          {/* Price & Add to Cart */}
          <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
            <div>
              <span className="font-bold text-indigo-600 dark:text-indigo-400 text-lg">
                {formatPrice(product.price)}
              </span>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 overflow-hidden ${
                product.stock === 0
                  ? "bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
                  : isAdding
                  ? "bg-emerald-500 text-white scale-95"
                  : "bg-gradient-to-r from-indigo-500 to-blue-500 text-white hover:from-indigo-600 hover:to-blue-600 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95"
              }`}
            >
              {isAdding ? "✓ Ditambahkan" : "+ Keranjang"}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
