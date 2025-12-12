"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

export default function Navbar() {
  const { totalItems } = useCart();
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-amber-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🏪</span>
            <span className="font-bold text-xl">Warung Madura</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:text-amber-200 transition-colors">
              Beranda
            </Link>
            <Link href="/produk" className="hover:text-amber-200 transition-colors">
              Produk
            </Link>
            <Link href="/kontak" className="hover:text-amber-200 transition-colors">
              Kontak
            </Link>
            <Link
              href="/keranjang"
              className="relative hover:text-amber-200 transition-colors"
            >
              <span className="text-2xl">🛒</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            {user ? (
              <Link
                href="/profil"
                className="flex items-center gap-2 hover:text-amber-200 transition-colors"
              >
                <span className="w-8 h-8 bg-amber-700 rounded-full flex items-center justify-center text-sm font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </Link>
            ) : (
              <Link
                href="/login"
                className="bg-amber-700 px-4 py-2 rounded-lg hover:bg-amber-800 transition-colors"
              >
                Masuk
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link
              href="/"
              className="block hover:text-amber-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="/produk"
              className="block hover:text-amber-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Produk
            </Link>
            <Link
              href="/kontak"
              className="block hover:text-amber-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontak
            </Link>
            <Link
              href="/keranjang"
              className="flex items-center gap-2 hover:text-amber-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>🛒</span>
              <span>Keranjang ({totalItems})</span>
            </Link>
            {user ? (
              <Link
                href="/profil"
                className="flex items-center gap-2 hover:text-amber-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>👤</span>
                <span>Profil ({user.name})</span>
              </Link>
            ) : (
              <Link
                href="/login"
                className="block bg-amber-700 px-4 py-2 rounded-lg text-center hover:bg-amber-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Masuk
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
