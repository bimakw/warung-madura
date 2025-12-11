import Link from "next/link";
import { storeInfo } from "@/data/store";

export default function Footer() {
  return (
    <footer className="bg-amber-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Info Toko */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span>🏪</span> {storeInfo.name}
            </h3>
            <p className="text-amber-100 text-sm">{storeInfo.description}</p>
          </div>

          {/* Link Cepat */}
          <div>
            <h3 className="font-bold text-lg mb-4">Link Cepat</h3>
            <ul className="space-y-2 text-amber-100">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/produk" className="hover:text-white transition-colors">
                  Produk
                </Link>
              </li>
              <li>
                <Link href="/keranjang" className="hover:text-white transition-colors">
                  Keranjang
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-white transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hubungi Kami</h3>
            <ul className="space-y-2 text-amber-100 text-sm">
              <li className="flex items-center gap-2">
                <span>📍</span> {storeInfo.address}
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span> {storeInfo.phone}
              </li>
              <li className="flex items-center gap-2">
                <span>💬</span>{" "}
                <a
                  href={`https://wa.me/${storeInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>⏰</span> {storeInfo.openHours}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-700 mt-8 pt-8 text-center text-amber-200 text-sm">
          <p>&copy; {new Date().getFullYear()} {storeInfo.name}. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
