"use client";

import { CartItem as CartItemType } from "@/types";
import { useCart } from "@/context/CartContext";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
      <div className="w-16 h-16 bg-amber-50 rounded-lg flex items-center justify-center text-3xl">
        {item.product.category === "Makanan" && "🍜"}
        {item.product.category === "Minuman" && "🥤"}
        {item.product.category === "Sembako" && "🛒"}
        {item.product.category === "Rokok" && "🚬"}
        {item.product.category === "Kebersihan" && "🧼"}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">{item.product.name}</h3>
        <p className="text-amber-600 font-medium">
          {formatPrice(item.product.price)}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
          className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors font-bold"
        >
          -
        </button>
        <span className="w-8 text-center font-medium">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
          className="w-8 h-8 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors font-bold"
        >
          +
        </button>
      </div>
      <div className="text-right min-w-[100px]">
        <p className="font-bold text-gray-800">
          {formatPrice(item.product.price * item.quantity)}
        </p>
      </div>
      <button
        onClick={() => removeFromCart(item.product.id)}
        className="text-red-500 hover:text-red-700 transition-colors text-xl"
      >
        🗑️
      </button>
    </div>
  );
}
