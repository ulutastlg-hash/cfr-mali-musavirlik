import Link from "next/link";
import { BarChart3, FileText, PieChart, Users } from "lucide-react";

export default function Home() {
  const services = [
    { title: "Muhasebe ve Defter Tutma", icon: <FileText className="h-8 w-8 text-brand-green" /> },
    { title: "Vergi Danışmanlığı", icon: <PieChart className="h-8 w-8 text-brand-green" /> },
    { title: "Bordrolama Hizmetleri", icon: <Users className="h-8 w-8 text-brand-green" /> },
    { title: "Finansal Raporlama", icon: <BarChart3 className="h-8 w-8 text-brand-green" /> },
  ];

  const testimonials = [
    { name: "Ahmet Yılmaz", company: "Yılmaz Lojistik A.Ş.", text: "CFR Mali Musavirlik ile calismaya basladigimizdan beri vergi sureclerimizde hicbir aksama yasamadik." },
    { name: "Ayşe Kaya", company: "Kaya Teknoloji", text: "Finansal raporlamadaki uzmanliklari sayesinde sirketimizin buyume hedeflerine cok daha emin adimlarla ilerliyoruz." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-brand-blue text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Finansal Geleceğinizi <span className="text-brand-green">Güvenle</span> İnşa Edin
          </h1>
          <Link href="/iletisim" className="bg-brand-green text-white px-8 py-3 rounded-md font-medium">
            Bizimle İletişime Geçin
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 border rounded-lg text-center">
              {service.icon}
              <h3 className="mt-4 font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Müşterilerimiz Ne Diyor?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-slate-700 italic mb-6">{t.text}</p>
                <p className="font-semibold">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}