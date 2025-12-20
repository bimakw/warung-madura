"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { totalItems } = useCart();
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-amber-600/95 backdrop-blur-md shadow-lg shadow-amber-900/10"
          : "bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
              🏪
            </span>
            <span className="font-bold text-xl text-white tracking-tight">
              Warung Madura
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink href="/">Beranda</NavLink>
            <NavLink href="/produk">Produk</NavLink>
            <NavLink href="/kontak">Kontak</NavLink>

            {/* Cart */}
            <Link
              href="/keranjang"
              className="relative p-2.5 mx-1 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <span className="text-xl">🛒</span>
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-5 h-5 px-1.5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center ring-2 ring-amber-600 animate-pulse">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 hover:rotate-12"
              aria-label="Toggle theme"
            >
              <span className="text-xl">{theme === "light" ? "🌙" : "☀️"}</span>
            </button>

            {/* User */}
            {user ? (
              <Link
                href="/profil"
                className="ml-2 flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 group"
              >
                <span className="w-7 h-7 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-inner">
                  {user.name.charAt(0).toUpperCase()}
                </span>
                <span className="text-sm font-medium text-white/90 group-hover:text-white hidden lg:block">
                  {user.name.split(" ")[0]}
                </span>
              </Link>
            ) : (
              <Link
                href="/login"
                className="ml-2 px-5 py-2 rounded-full bg-white text-amber-700 font-semibold text-sm hover:bg-amber-50 hover:shadow-lg hover:shadow-amber-900/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                Masuk
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="pt-2 space-y-1">
            <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>
              🏠 Beranda
            </MobileNavLink>
            <MobileNavLink href="/produk" onClick={() => setIsMenuOpen(false)}>
              📦 Produk
            </MobileNavLink>
            <MobileNavLink href="/kontak" onClick={() => setIsMenuOpen(false)}>
              📞 Kontak
            </MobileNavLink>
            <MobileNavLink href="/keranjang" onClick={() => setIsMenuOpen(false)}>
              🛒 Keranjang {totalItems > 0 && `(${totalItems})`}
            </MobileNavLink>

            <button
              onClick={toggleTheme}
              className="w-full text-left px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              {theme === "light" ? "🌙 Mode Gelap" : "☀️ Mode Terang"}
            </button>

            {user ? (
              <MobileNavLink href="/profil" onClick={() => setIsMenuOpen(false)}>
                👤 Profil ({user.name})
              </MobileNavLink>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="block mx-2 mt-2 px-4 py-3 text-center rounded-xl bg-white text-amber-700 font-semibold hover:bg-amber-50 transition-colors"
              >
                Masuk
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-4 py-2 rounded-xl text-white/90 font-medium hover:text-white hover:bg-white/10 transition-all duration-200"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
    >
      {children}
    </Link>
  );
}
