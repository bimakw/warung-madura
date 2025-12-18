"use client";

import Link from "next/link";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

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

  return (
    <Link href={`/produk/${product.id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <div className="relative h-48 bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-6xl">
          {product.category === "Makanan" && "🍜"}
          {product.category === "Minuman" && "🥤"}
          {product.category === "Sembako" && "🛒"}
          {product.category === "Rokok" && "🚬"}
          {product.category === "Kebersihan" && "🧼"}
          <button
            onClick={handleToggleWishlist}
            className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              inWishlist
                ? "bg-red-500 text-white"
                : "bg-white/80 dark:bg-gray-700/80 text-gray-400 hover:text-red-500"
            }`}
            aria-label={inWishlist ? "Hapus dari favorit" : "Tambah ke favorit"}
          >
            {inWishlist ? "❤️" : "🤍"}
          </button>
        </div>
        <div className="p-4">
          <span className="text-xs bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 px-2 py-1 rounded-full">
            {product.category}
          </span>
          <h3 className="font-semibold text-lg mt-2 text-gray-800 dark:text-gray-100">{product.name}</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{product.description}</p>
          <div className="flex justify-between items-center mt-4">
            <span className="font-bold text-amber-600 dark:text-amber-400 text-lg">
              {formatPrice(product.price)}
            </span>
            <button
              onClick={handleAddToCart}
              className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors text-sm font-medium"
            >
              + Keranjang
            </button>
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">Stok: {product.stock}</p>
        </div>
      </div>
    </Link>
  );
}
