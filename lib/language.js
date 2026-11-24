import { cache } from "react";
import { cookies } from "next/headers";
import { practices } from "./content";

const id = {
  "Skip to content": "Langsung ke konten",
  "About": "Tentang Kami",
  "Practice Areas": "Layanan Hukum",
  "Contact": "Kontak",
  "Main navigation": "Navigasi utama",
  "Mobile navigation": "Navigasi seluler",
  "Consultation via WhatsApp": "Konsultasi via WhatsApp",
  "Open menu": "Buka menu",
  "Close menu": "Tutup menu",
  "About Delmore Law Firm": "Tentang Delmore Law Firm",
  "Home": "Beranda",
  "Practice Area": "Layanan Hukum",
  "View practice details": "Lihat detail layanan",
  "All Practice Areas": "Semua Layanan Hukum",
  "Explore Practice Areas": "Jelajahi Layanan Kami",
  "Business Law in Indonesia": "Hukum Bisnis di Indonesia",
  "Practical Legal Solutions for Your Business": "Solusi Hukum yang Praktis untuk Kebutuhan Bisnis Anda",
  "Legal guidance for businesses, investors, and domestic and international clients navigating Indonesian law.": "Pendampingan hukum bagi perusahaan, investor, serta klien domestik dan internasional dalam memahami dan menghadapi hukum Indonesia.",
  "Based in South Tangerang": "Berlokasi di Tangerang Selatan",
  "Serving domestic and international clients": "Melayani klien domestik dan internasional",
  "About the firm": "Profil Firma",
  "A Business Perspective on Legal Decisions": "Perspektif Bisnis dalam Pengambilan Keputusan Hukum",
  "Delmore Law Firm provides practical, commercially focused legal guidance to domestic and international clients in Indonesia. The firm advises on business disputes, corporate transactions, legal matters, and the recovery of assets and debts.": "Delmore Law Firm memberikan pendampingan hukum yang praktis dan berorientasi pada kebutuhan bisnis klien domestik dan internasional di Indonesia. Fokus kami mencakup sengketa bisnis, transaksi korporasi, konsultasi hukum, serta pemulihan aset dan piutang.",
  "Business Law Services": "Layanan Hukum Bisnis",
  "Consultation": "Konsultasi",
  "Discuss Your Legal Needs": "Konsultasikan Kebutuhan Hukum Anda",
  "Contact our BSD office on WhatsApp to discuss how we can help.": "Hubungi kantor BSD kami melalui WhatsApp untuk membahas kebutuhan hukum Anda.",
  "Contact Us on WhatsApp": "Hubungi Kami via WhatsApp",
  "BSD Office": "Kantor BSD",
  "Phone and WhatsApp": "Telepon dan WhatsApp",
  "Monday–Friday, open 24 hours": "Senin–Jumat, buka 24 jam",
  "Saturday–Sunday, closed": "Sabtu–Minggu, tutup",
  "View Google Business Profile": "Lihat Profil Bisnis Google",
  "Business law in Indonesia": "Hukum bisnis di Indonesia",
  "BSD Office, South Tangerang": "Kantor BSD, Tangerang Selatan",
  "Explore": "Jelajahi",
  "Practical legal guidance for businesses and investors in Indonesia from Delmore Law Firm's BSD Office.": "Pendampingan hukum praktis bagi perusahaan dan investor di Indonesia dari Delmore Law Firm, Kantor BSD.",
  "3rd Floor, Ruko Golden Vienna 2, Block A C.A No. 15, Sector XII, RT 010/RW 014, Rawa Buntu, Serpong, South Tangerang, Banten 15318, Indonesia": "Lt. 3, Ruko Golden Vienna 2, Blok A C.A No. 15, Sektor XII, RT 010/RW 014, Kel. Rawa Buntu, Kec. Serpong, Kota Tangerang Selatan, Banten 15318, Indonesia",
};

const practiceTranslations = {
  "corporate-litigation": ["Litigasi Korporasi", "Pendampingan hukum bagi perusahaan dan pemilik usaha dalam menangani sengketa korporasi dan bisnis."],
  "mergers-acquisitions": ["Merger & Akuisisi", "Pendampingan hukum bagi perusahaan dalam transaksi merger dan akuisisi."],
  "corporate-legal-advisory": ["Konsultasi Hukum & Korporasi", "Nasihat hukum untuk kebutuhan perusahaan dan bisnis, termasuk penyusunan dan penelaahan kontrak."],
  "asset-debt-recovery": ["Pemulihan Aset & Penagihan Piutang", "Pendampingan hukum dalam pemulihan aset dan penagihan piutang."],
  "transactions-regulatory-investment": ["Pendampingan Transaksi, Regulasi & Investasi", "Pendampingan transaksi dan regulasi bagi perusahaan, investor, dan klien internasional yang menjalankan bisnis di Indonesia."],
};

export const getLanguage = cache(async () => (await cookies()).get("site-language")?.value === "id" ? "id" : "en");

export const getCopy = cache(async () => {
  const language = await getLanguage();
  const t = (text) => language === "id" ? id[text] ?? text : text;
  return {
    language,
    t,
    practices: language === "en" ? practices : practices.map((practice) => {
      const [title, summary] = practiceTranslations[practice.slug];
      return { ...practice, title, summary };
    }),
  };
});
