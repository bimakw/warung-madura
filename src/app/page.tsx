import Link from "next/link";
import { products } from "@/data/products";
import { storeInfo } from "@/data/store";
import ProductCard from "@/components/ProductCard";
import PromoBanner from "@/components/PromoBanner";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl">🏪</div>
          <div className="absolute top-20 right-20 text-6xl">🛒</div>
          <div className="absolute bottom-10 left-1/4 text-7xl">📦</div>
          <div className="absolute bottom-20 right-10 text-5xl">🥤</div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-amber-600/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
          <div className="text-center">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Buka 24 Jam Non-Stop
            </span>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              <span className="inline-block hover:scale-105 transition-transform">🏪</span>{" "}
              {storeInfo.name}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl lg:text-2xl mb-3 text-amber-100 font-medium">
              {storeInfo.openHours}
            </p>
            <p className="text-base sm:text-lg max-w-2xl mx-auto mb-8 text-white/80">
              {storeInfo.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/produk"
                className="inline-flex items-center justify-center gap-2 bg-white text-amber-600 px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-amber-50 hover:shadow-xl hover:shadow-amber-900/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>🛍️</span> Lihat Produk
              </Link>
              <a
                href={`https://wa.me/${storeInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/80 text-white px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-white hover:text-amber-600 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>💬</span> Hubungi Kami
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold">100+</div>
                <div className="text-xs sm:text-sm text-white/70">Produk</div>
              </div>
              <div className="text-center border-x border-white/20">
                <div className="text-2xl sm:text-3xl font-bold">24/7</div>
                <div className="text-xs sm:text-sm text-white/70">Layanan</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold">1000+</div>
                <div className="text-xs sm:text-sm text-white/70">Pelanggan</div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              className="fill-amber-50 dark:fill-gray-800"
            />
          </svg>
        </div>
      </section>

      {/* Promo Banner */}
      <PromoBanner />

      {/* Keunggulan */}
      <section className="py-16 lg:py-20 bg-amber-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-amber-600 dark:text-amber-400 font-semibold text-sm uppercase tracking-wider">
              Keunggulan Kami
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100 mt-2">
              Mengapa Pilih Kami?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                emoji: "⏰",
                title: "Buka 24 Jam",
                description: "Selalu siap melayani kebutuhan Anda kapan saja, siang maupun malam.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                emoji: "💰",
                title: "Harga Terjangkau",
                description: "Produk berkualitas dengan harga yang ramah di kantong.",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                emoji: "📦",
                title: "Produk Lengkap",
                description: "Menyediakan berbagai kebutuhan sehari-hari dalam satu tempat.",
                gradient: "from-purple-500 to-pink-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-700 p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.emoji}
                </div>
                <h3 className="font-bold text-xl text-gray-800 dark:text-gray-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produk Unggulan */}
      <section className="py-16 lg:py-20 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <span className="text-amber-600 dark:text-amber-400 font-semibold text-sm uppercase tracking-wider">
                Pilihan Terbaik
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100 mt-1">
                Produk Unggulan
              </h2>
            </div>
            <Link
              href="/produk"
              className="group inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-semibold transition-colors"
            >
              Lihat Semua
              <span className="group-hover:translate-x-1 transition-transform">→</span>
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
      <section className="py-16 lg:py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white dark:bg-gray-700 rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Content */}
              <div className="p-8 lg:p-12">
                <span className="text-amber-600 dark:text-amber-400 font-semibold text-sm uppercase tracking-wider">
                  Temukan Kami
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100 mt-2 mb-6">
                  📍 Lokasi Kami
                </h2>

                <div className="space-y-4">
                  {[
                    { icon: "🏠", label: "Alamat", value: storeInfo.address },
                    { icon: "📞", label: "Telepon", value: storeInfo.phone },
                    { icon: "✉️", label: "Email", value: storeInfo.email },
                    { icon: "⏰", label: "Jam Buka", value: storeInfo.openHours, highlight: true },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          {item.label}
                        </p>
                        <p
                          className={`font-medium ${
                            item.highlight
                              ? "text-amber-600 dark:text-amber-400"
                              : "text-gray-700 dark:text-gray-200"
                          }`}
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/${storeInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span>💬</span> Chat via WhatsApp
                </a>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-amber-100 via-amber-50 to-orange-100 dark:from-gray-600 dark:via-gray-600 dark:to-gray-500 h-64 md:h-auto flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-7xl lg:text-8xl mb-4 animate-bounce">🗺️</div>
                  <p className="text-amber-700 dark:text-amber-200 font-medium">
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
