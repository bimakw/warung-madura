import Link from "next/link";
import { storeInfo } from "@/data/store";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <span className="text-3xl group-hover:scale-110 transition-transform">
                🏪
              </span>
              <span className="font-bold text-xl tracking-tight">
                {storeInfo.name}
              </span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              {storeInfo.description}
            </p>

            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              <SocialButton href={`https://wa.me/${storeInfo.whatsapp}`} label="WhatsApp">
                💬
              </SocialButton>
              <SocialButton href={`tel:${storeInfo.phone}`} label="Telepon">
                📞
              </SocialButton>
              <SocialButton href={`mailto:${storeInfo.email}`} label="Email">
                ✉️
              </SocialButton>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-amber-500 rounded-full" />
              Navigasi
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/">Beranda</FooterLink>
              <FooterLink href="/produk">Katalog Produk</FooterLink>
              <FooterLink href="/keranjang">Keranjang Belanja</FooterLink>
              <FooterLink href="/kontak">Kontak Kami</FooterLink>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-amber-500 rounded-full" />
              Kategori
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/produk?kategori=Makanan">🍜 Makanan</FooterLink>
              <FooterLink href="/produk?kategori=Minuman">🥤 Minuman</FooterLink>
              <FooterLink href="/produk?kategori=Sembako">🛒 Sembako</FooterLink>
              <FooterLink href="/produk?kategori=Kebersihan">🧼 Kebersihan</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-amber-500 rounded-full" />
              Hubungi Kami
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-lg flex-shrink-0 mt-0.5">📍</span>
                <span className="text-gray-400">{storeInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg flex-shrink-0">📞</span>
                <a
                  href={`tel:${storeInfo.phone}`}
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  {storeInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg flex-shrink-0">⏰</span>
                <span className="text-amber-400 font-medium">{storeInfo.openHours}</span>
              </li>
            </ul>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${storeInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-xl hover:from-green-600 hover:to-green-700 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
            >
              💬 Chat WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} {storeInfo.name}. Hak Cipta Dilindungi.
            </p>
            <p className="flex items-center gap-1">
              Dibuat dengan <span className="text-red-500">❤️</span> di Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
      >
        <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 transition-all duration-200 rounded-full" />
        {children}
      </Link>
    </li>
  );
}

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-amber-600 flex items-center justify-center text-lg transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
    >
      {children}
    </a>
  );
}
