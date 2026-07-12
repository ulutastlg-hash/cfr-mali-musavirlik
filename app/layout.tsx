import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CFR Mali Müşavirlik | Profesyonel Muhasebe ve Danışmanlık",
  description: "CFR Mali Müşavirlik, şirketinizin finansal sağlığını güvence altına alan profesyonel muhasebe, vergi ve finansal danışmanlık hizmetleri sunar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-brand-light text-slate-800 flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}