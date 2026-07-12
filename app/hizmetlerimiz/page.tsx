import { CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  const detailedServices = [
    {
      title: "Muhasebe ve Defter Tutma",
      features: [
        "Tekdüzen hesap planına uygun kayıt",
        "Aylık mizan ve gelir tablolarının hazırlanması",
        "E-Defter süreçlerinin yönetimi",
        "Sabit kıymet ve amortisman takibi"
      ]
    },
    {
      title: "Vergi Danışmanlığı",
      features: [
        "Kurumlar Vergisi ve Gelir Vergisi beyannameleri",
        "KDV ve Muhtasar beyannamelerinin hazırlanması",
        "Vergi uyuşmazlıkları ve uzlaşma süreçleri",
        "Vergi teşvikleri danışmanlığı"
      ]
    },
    {
      title: "Bordrolama Hizmetleri",
      features: [
        "Aylık ücret bordrolarının hazırlanması",
        "SGK bildirgelerinin verilmesi",
        "İşe giriş ve çıkış işlemlerinin yapılması",
        "İş hukuku ve sosyal güvenlik danışmanlığı"
      ]
    },
    {
      title: "Şirket Kuruluş İşlemleri",
      features: [
        "Anonim ve Limited şirket kuruluşları",
        "Şube açılış işlemleri",
        "Yabancı sermayeli şirket kuruluşları",
        "Ana sözleşme değişiklikleri ve tescili"
      ]
    }
  ];

  return (
    <div className="py-20 bg-brand-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-blue mb-4">Hizmetlerimiz</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            İşletmenizin finansal ve yasal yükümlülüklerini eksiksiz yerine getirmek için geniş kapsamlı çözümler sunuyoruz.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {detailedServices.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
              <h2 className="text-2xl font-semibold text-brand-blue mb-6 border-b pb-4">{service.title}</h2>
              <ul className="space-y-4">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-brand-green mr-3 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}