"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const promos = [
  {
    id: 1,
    title: "Promo Akhir Tahun!",
    description: "Diskon 20% untuk semua produk sembako",
    bgColor: "bg-gradient-to-r from-red-500 to-orange-500",
    link: "/produk?category=Sembako",
  },
  {
    id: 2,
    title: "Beli 2 Gratis 1",
    description: "Khusus produk minuman kemasan",
    bgColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
    link: "/produk?category=Minuman",
  },
  {
    id: 3,
    title: "Flash Sale!",
    description: "Harga spesial setiap hari Jumat",
    bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    link: "/produk",
  },
];

export default function PromoBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % promos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + promos.length) % promos.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % promos.length);
  };

  return (
    <div className="relative overflow-hidden rounded-xl mx-4 my-6">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {promos.map((promo) => (
          <Link
            key={promo.id}
            href={promo.link}
            className={`${promo.bgColor} min-w-full px-8 py-12 text-white flex-shrink-0`}
          >
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                {promo.title}
              </h2>
              <p className="text-lg md:text-xl opacity-90">{promo.description}</p>
              <span className="inline-block mt-4 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
                Lihat Promo →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        aria-label="Previous"
      >
        ←
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        aria-label="Next"
      >
        →
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {promos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
