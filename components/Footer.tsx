import Link from "next/link";
import { Phone, Mail, MapPin, Calculator } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Calculator className="h-6 w-6 text-brand-green" />
              <span className="font-bold text-xl text-white tracking-tight">
                CFR Mali Müşavirlik
              </span>
            </Link>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              İşletmenizin finansal süreçlerini güvenle yönetiyor, büyümenize katkı sağlıyoruz. Profesyonel ve şeffaf hizmet anlayışımızla yanınızdayız.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-brand-green transition-colors text-sm">Ana Sayfa</Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz" className="hover:text-brand-green transition-colors text-sm">Hizmetlerimiz</Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="hover:text-brand-green transition-colors text-sm">Hakkımızda</Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-brand-green transition-colors text-sm">İletişim</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">İletişim Bilgileri</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="h-5 w-5 text-brand-green flex-shrink-0" />
                <span>Oruçreis Mah. Tekstilciler Cad.<br />Tekstilkent G2 Blok No:10<br />Esenler, İstanbul</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="h-5 w-5 text-brand-green flex-shrink-0" />
                <span>0544 509 28 45</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="h-5 w-5 text-brand-green flex-shrink-0" />
                <span>metin@cfrsmmm.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {currentYear} CFR Mali Müşavirlik. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}