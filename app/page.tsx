import Link from "next/link";
import { BarChart3, FileText, PieChart, Users } from "lucide-react";

export default function Home() {
  const services = [
    { title: "Muhasebe ve Defter Tutma", icon: <FileText className="h-8 w-8 text-emerald-600" /> },
    { title: "Vergi Danışmanlığı", icon: <PieChart className="h-8 w-8 text-emerald-600" /> },
    { title: "Bordrolama Hizmetleri", icon: <Users className="h-8 w-8 text-emerald-600" /> },
    { title: "Finansal Raporlama", icon: <BarChart3 className="h-8 w-8 text-emerald-600" /> },
  ];

  const testimonials = [
    { 
      name: "Ahmet Yılmaz", 
      company: "Yılmaz Lojistik A.Ş.", 
      text: "CFR Mali Musavirlik ile calismaya basladigimizdan beri vergi sureclerimizde hicbir aksama yasamadik." 
    },
    { 
      name: "Ayşe Kaya", 
      company: "Kaya Teknoloji", 
      text: "Finansal raporlamadaki uzmanliklari sayesinde sirketimizin buyume hedeflerine cok daha emin adimlarla ilerliyoruz." 
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-slate-900 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Finansal Geleceğinizi <span className="text-emerald-500">Güvenle</span> İnşa Edin
          </h1>
          <Link href="/iletisim" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
            Bizimle İletişime Geçin
          </Link>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-semibold text-slate-900">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Müşterilerimiz Ne Diyor?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                <p className="text-slate-700 italic mb-6">{t.text}</p>
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}