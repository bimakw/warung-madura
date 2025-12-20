"use client";

import { useState, useEffect, useRef } from "react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

type SortOption = "default" | "price-asc" | "price-desc" | "name-asc" | "name-desc";

export default function ProdukPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredProducts = products
    .filter((product) => {
      const matchesCategory =
        selectedCategory === "Semua" || product.category === selectedCategory;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

  const clearFilters = () => {
    setSelectedCategory("Semua");
    setSearchQuery("");
    setSortBy("default");
  };

  const hasActiveFilters =
    selectedCategory !== "Semua" || searchQuery !== "" || sortBy !== "default";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 left-10 text-6xl">📦</div>
          <div className="absolute top-10 right-20 text-4xl">🛒</div>
          <div className="absolute bottom-5 left-1/3 text-5xl">🏪</div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white/90 text-xs font-medium mb-4">
            <span>📦</span> {products.length} Produk Tersedia
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 tracking-tight">
            Katalog Produk
          </h1>
          <p className="text-amber-100 text-lg">
            Temukan berbagai kebutuhan sehari-hari Anda
          </p>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full h-auto">
            <path
              d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 32.5C672 35 768 40 864 42.5C960 45 1056 45 1152 42.5C1248 40 1344 35 1392 32.5L1440 30V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z"
              className="fill-gray-50 dark:fill-gray-900"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Filter & Search */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-6 mb-8">
          <div className="flex flex-col gap-4">
            {/* Search and Sort Row */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <div
                  className={`relative flex items-center transition-all duration-200 ${
                    isSearchFocused ? "ring-2 ring-amber-500 ring-offset-2 dark:ring-offset-gray-800" : ""
                  }`}
                >
                  <span className="absolute left-4 text-gray-400 text-lg">🔍</span>
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Cari produk..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    className="w-full pl-12 pr-20 py-3 bg-gray-50 dark:bg-gray-700 border-0 rounded-xl focus:outline-none focus:bg-white dark:focus:bg-gray-600 text-gray-800 dark:text-gray-100 placeholder-gray-400 transition-colors"
                  />
                  <kbd className="absolute right-3 hidden sm:flex items-center gap-1 px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-300 text-xs font-medium rounded-lg">
                    <span>⌘</span>K
                  </kbd>
                </div>
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="appearance-none w-full sm:w-auto px-4 py-3 pr-10 bg-gray-50 dark:bg-gray-700 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-800 dark:text-gray-100 font-medium cursor-pointer transition-all"
                >
                  <option value="default">⚡ Urutkan</option>
                  <option value="price-asc">💰 Harga: Rendah ke Tinggi</option>
                  <option value="price-desc">💎 Harga: Tinggi ke Rendah</option>
                  <option value="name-asc">🔤 Nama: A-Z</option>
                  <option value="name-desc">🔤 Nama: Z-A</option>
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  ▼
                </span>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {category}
                </button>
              ))}

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors flex items-center gap-1"
                >
                  <span>✕</span> Reset
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            Menampilkan{" "}
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              {filteredProducts.length}
            </span>{" "}
            produk
            {selectedCategory !== "Semua" && (
              <span className="text-amber-600 dark:text-amber-400">
                {" "}
                di kategori {selectedCategory}
              </span>
            )}
          </p>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 mb-6">
              <span className="text-4xl">🔍</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Produk tidak ditemukan
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Coba gunakan kata kunci lain atau pilih kategori berbeda
            </p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl transition-colors"
            >
              <span>🔄</span> Reset Filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
