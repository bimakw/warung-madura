"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import CartItemComponent from "@/components/CartItem";
import { storeInfo } from "@/data/store";

export default function KeranjangPage() {
  const { items, totalPrice, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const generateWhatsAppMessage = () => {
    let message = "Halo, saya ingin memesan:\n\n";
    items.forEach((item) => {
      message += `- ${item.product.name} x${item.quantity} = ${formatPrice(
        item.product.price * item.quantity
      )}\n`;
    });
    message += `\nTotal: ${formatPrice(totalPrice)}`;
    return encodeURIComponent(message);
  };

  if (items.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="text-8xl mb-6">🛒</div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Keranjang Kosong
            </h1>
            <p className="text-gray-500 mb-8">
              Belum ada produk di keranjang belanja Anda
            </p>
            <Link
              href="/produk"
              className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              Mulai Belanja
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-amber-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Keranjang Belanja</h1>
          <p className="text-amber-100">
            {items.length} produk dalam keranjang
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <CartItemComponent key={item.product.id} item={item} />
            ))}

            <button
              onClick={clearCart}
              className="text-red-500 hover:text-red-700 transition-colors text-sm flex items-center gap-2"
            >
              🗑️ Kosongkan Keranjang
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Ringkasan Pesanan
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Biaya Pengiriman</span>
                  <span className="text-green-600">Gratis*</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-amber-600">{formatPrice(totalPrice)}</span>
                </div>
              </div>

              <p className="text-xs text-gray-500 mb-4">
                *Gratis ongkir untuk radius 3km dari toko
              </p>

              <Link
                href="/checkout"
                className="block w-full bg-amber-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors mb-3"
              >
                Lanjut ke Checkout
              </Link>

              <a
                href={`https://wa.me/${storeInfo.whatsapp}?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors mb-3"
              >
                💬 Pesan Cepat via WhatsApp
              </a>

              <Link
                href="/produk"
                className="block w-full border border-amber-600 text-amber-600 text-center py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
              >
                Lanjut Belanja
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
