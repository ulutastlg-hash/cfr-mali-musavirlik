export default function AboutPage() {
  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-blue mb-4">Hakkımızda</h1>
          <div className="h-1 w-20 bg-brand-green mx-auto rounded-full"></div>
        </div>

        {/* Team Sectie */}
        <div className="space-y-16">
          
          {/* Metin Ulutaş */}
          <div>
            <h2 className="text-2xl font-bold text-brand-blue mb-2">Metin Ulutaş</h2>
            <p className="text-brand-green font-medium mb-4">Mali Müşavir</p>
            <p className="text-slate-700 leading-relaxed mb-4">
              CFR Mali Müşavirlik kurucusu olarak 20 yılı aşkın süredir muhasebe ve finansal yönetim alanında profesyonel hizmet vermekteyim. 
              Süper Kromaj ve Brandit Reklam gibi önemli kurumlarda Muhasebe Müdürü olarak edindiğim tecrübeyle, işletmenizin finansal süreçlerini en güvenilir şekilde yönetiyoruz.
            </p>
          </div>

          {/* Büşra Ulutaş */}
          <div>
            <h2 className="text-2xl font-bold text-brand-blue mb-2">Büşra Ulutaş</h2>
            <p className="text-brand-green font-medium mb-4">Mali Müşavir</p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Anadolu Üniversitesi mezunu, 10 yılı aşkın finansal tecrübesiyle ekibimizin kilit ismidir. 
              BIBUS Türkiye bünyesinde Accounting and Finance Manager olarak edindiği uluslararası tecrübe ile şirketinizin finansal verimliliğini artırmak için stratejik çözümler üretmektedir.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}