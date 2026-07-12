import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="py-20 bg-brand-light min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-blue mb-4">İletişim</h1>
          <p className="text-lg text-slate-600">
            Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz.
          </p>
        </div>

        {/* İletişim Bilgileri (Gecentraliseerd) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <MapPin className="h-8 w-8 text-brand-green mb-4" />
            <h3 className="font-semibold text-brand-blue mb-2">Adres</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Oruçreis Mah. Tekstilciler Cad.<br />
              Tekstilkent G2 Blok No:10<br />
              Esenler, İstanbul
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <Phone className="h-8 w-8 text-brand-green mb-4" />
            <h3 className="font-semibold text-brand-blue mb-2">Telefon</h3>
            <p className="text-sm text-slate-600">0544 509 28 45</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <Mail className="h-8 w-8 text-brand-green mb-4" />
            <h3 className="font-semibold text-brand-blue mb-2">E-posta</h3>
            <p className="text-sm text-slate-600">metin@cfrsmmm.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}