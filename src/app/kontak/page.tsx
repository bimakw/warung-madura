"use client";

import { useState } from "react";
import { storeInfo } from "@/data/store";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo, saya ${formData.name}.\n\n${formData.message}\n\nNomor HP: ${formData.phone}`;
    window.open(
      `https://wa.me/${storeInfo.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-amber-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Hubungi Kami</h1>
          <p className="text-amber-100">
            Ada pertanyaan? Jangan ragu untuk menghubungi kami
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Informasi Kontak
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Alamat</h3>
                    <p className="text-gray-600">{storeInfo.address}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Telepon</h3>
                    <p className="text-gray-600">{storeInfo.phone}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">💬</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${storeInfo.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700"
                    >
                      Chat Sekarang
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">✉️</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <a
                      href={`mailto:${storeInfo.email}`}
                      className="text-amber-600 hover:text-amber-700"
                    >
                      {storeInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">⏰</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Jam Buka</h3>
                    <p className="text-amber-600 font-semibold">
                      {storeInfo.openHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Kirim Pesan
            </h2>

            <div className="bg-white rounded-lg shadow-md p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nomor HP
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Contoh: 08123456789"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                >
                  <span>💬</span> Kirim via WhatsApp
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-amber-100 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-amber-800 font-medium">
                    Google Maps akan ditampilkan di sini
                  </p>
                  <p className="text-amber-600 text-sm mt-2">
                    {storeInfo.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
