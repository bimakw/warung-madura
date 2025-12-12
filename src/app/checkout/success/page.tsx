"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CheckoutSuccessPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div
            className={`text-8xl mb-6 transition-transform duration-500 ${
              mounted ? "scale-100" : "scale-0"
            }`}
          >
            ✅
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Pesanan Berhasil Dikirim!
          </h1>

          <p className="text-gray-600 mb-6">
            Pesanan Anda telah dikirim melalui WhatsApp. Silakan tunggu konfirmasi
            dari kami untuk proses selanjutnya.
          </p>

          <div className="bg-amber-50 rounded-lg p-4 mb-8">
            <h3 className="font-semibold text-amber-800 mb-2">
              Langkah Selanjutnya:
            </h3>
            <ol className="text-left text-amber-700 text-sm space-y-2">
              <li>1. Admin akan mengkonfirmasi ketersediaan produk</li>
              <li>2. Anda akan mendapat total pembayaran final</li>
              <li>3. Lakukan pembayaran sesuai metode yang dipilih</li>
              <li>4. Pesanan akan segera dikirim ke alamat Anda</li>
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/produk"
              className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              Belanja Lagi
            </Link>
            <Link
              href="/"
              className="border border-amber-600 text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
