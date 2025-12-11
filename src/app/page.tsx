import Link from "next/link";
import { products } from "@/data/products";
import { storeInfo } from "@/data/store";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-500 to-amber-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            🏪 {storeInfo.name}
          </h1>
          <p className="text-xl md:text-2xl mb-2 text-amber-100">
            {storeInfo.openHours}
          </p>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-amber-50">
            {storeInfo.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/produk"
              className="bg-white text-amber-700 px-8 py-3 rounded-full font-semibold hover:bg-amber-50 transition-colors"
            >
              Lihat Produk
            </Link>
            <a
              href={`https://wa.me/${storeInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-amber-700 transition-colors"
            >
              💬 Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Mengapa Pilih Kami?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">Buka 24 Jam</h3>
              <p className="text-gray-600">
                Selalu siap melayani kebutuhan Anda kapan saja, siang maupun malam.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">Harga Terjangkau</h3>
              <p className="text-gray-600">
                Produk berkualitas dengan harga yang ramah di kantong.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">📦</div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">Produk Lengkap</h3>
              <p className="text-gray-600">
                Menyediakan berbagai kebutuhan sehari-hari dalam satu tempat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Produk Unggulan */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Produk Unggulan</h2>
            <Link
              href="/produk"
              className="text-amber-600 hover:text-amber-700 font-medium"
            >
              Lihat Semua →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Lokasi */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  📍 Lokasi Kami
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p className="flex items-start gap-3">
                    <span className="text-xl">🏠</span>
                    <span>{storeInfo.address}</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-xl">📞</span>
                    <span>{storeInfo.phone}</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-xl">✉️</span>
                    <span>{storeInfo.email}</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-xl">⏰</span>
                    <span className="font-semibold text-amber-600">
                      {storeInfo.openHours}
                    </span>
                  </p>
                </div>
                <a
                  href={`https://wa.me/${storeInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
                >
                  💬 Chat via WhatsApp
                </a>
              </div>
              <div className="bg-amber-100 h-64 md:h-auto flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">🗺️</div>
                  <p className="text-amber-800">
                    Peta lokasi akan ditampilkan di sini
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
