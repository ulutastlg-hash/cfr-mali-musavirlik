import Link from "next/link";
import { ArrowRight, BarChart3, FileText, PieChart, ShieldCheck, Users, Briefcase } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Muhasebe ve Defter Tutma",
      description: "Yasal mevzuata uygun, şeffaf ve düzenli defter tutma hizmetleri.",
      icon: <FileText className="h-8 w-8 text-brand-green" />,
    },
    {
      title: "Vergi Danışmanlığı",
      description: "Vergi yükünüzü optimize eden stratejik planlama ve danışmanlık.",
      icon: <PieChart className="h-8 w-8 text-brand-green" />,
    },
    {
      title: "Bordrolama Hizmetleri",
      description: "Personel özlük dosyalarının yönetimi ve hatasız bordro süreçleri.",
      icon: <Users className="h-8 w-8 text-brand-green" />,
    },
    {
      title: "Finansal Raporlama",
      description: "Şirketinizin performansını ölçen detaylı ve anlaşılır raporlar.",
      icon: <BarChart3 className="h-8 w-8 text-brand-green" />,
    },
  ];

  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      company: "Yılmaz Lojistik A.Ş.",
      text: "CFR Mali Müşavirlik ile çalışmaya başladığımızdan beri vergi süreçlerimizde hiçbir aksama yaşamadık. Gerçek bir çözüm ortağı.",
    },
    {
      name: "Ayşe Kaya",
      company: "Kaya Teknoloji",
      text: "Finansal raporlamadaki uzmanlıkları sayesinde şirketimizin büyüme hedeflerine çok daha emin adımlarla ilerliyoruz.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Finansal Geleceğinizi <span className="text-brand-green">Güvenle</span> İnşa Edin
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10">
            CFR Mali Müşavirlik olarak, işletmenizin muhasebe ve vergi süreçlerini profesyonelce yönetiyor, sizin sadece büyümenize odaklanmanızı sağlıyoruz.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/iletisim" className="bg-brand-green hover:bg-emerald-500 text-white px-8 py-3 rounded-md font-medium transition-colors flex items-center justify-center">
              Bizimle İletişime Geçin
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/hizmetlerimiz" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-md font-medium transition-colors flex items-center justify-center">
              Hizmetlerimizi İnceleyin
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-brand-light p-4 rounded-full mb-4">
                <ShieldCheck className="h-10 w-10 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Güvenilirlik</h3>
              <p className="text-slate-600">Verileriniz ve finansal süreçleriniz en yüksek gizlilik standartlarında korunur.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-brand-light p-4 rounded-full mb-4">
                <Briefcase className="h-10 w-10 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Uzman Kadro</h3>
              <p className="text-slate-600">Yılların getirdiği tecrübe ile mevzuata tam uyumlu, eksiksiz hizmet sunuyoruz.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-brand-light p-4 rounded-full mb-4">
                <BarChart3 className="h-10 w-10 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Stratejik Büyüme</h3>
              <p className="text-slate-600">Sadece geçmişi raporlamaz, gelecekteki büyüme adımlarınızı planlarız.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Hizmetlerimiz</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              İşletmenizin ihtiyaç duyduğu tüm mali müşavirlik ve danışmanlık hizmetlerini tek çatı altında sunuyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-brand-blue mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/hizmetlerimiz" className="inline-flex items-center text-brand-green font-semibold hover:text-emerald-700 transition-colors">
              Tüm Hizmetlerimizi Görün <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-blue text-center mb-16">Müşterilerimiz Ne Diyor?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-brand-light p-8 rounded-lg">
                <p className="text-slate-700 italic mb-6">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-brand-blue">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}