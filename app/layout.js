import "@fontsource-variable/inter";
import "@fontsource-variable/source-sans-3";
import "./globals.css";
import { MessageCircle } from "lucide-react";
import { Header } from "../components/interactive";
import { Footer } from "../components/sections";
import { switchLanguage } from "./language-action";
import { getCopy } from "../lib/language";
import { firm, nav, office } from "../lib/content";

export async function generateMetadata() {
  const { language, t } = await getCopy();
  return {
    title: { default: firm + " | " + t("Business Law in Indonesia"), template: "%s | " + firm },
    description: t("Practical legal guidance for businesses and investors in Indonesia from Delmore Law Firm's BSD Office."),
    metadataBase: new URL(process.env.SITE_URL || "http://localhost:3000"),
    openGraph: { type: "website", locale: language === "id" ? "id_ID" : "en", siteName: firm, images: ["/images/hero.webp"] },
  };
}

export default async function RootLayout({ children }) {
  const { language, t } = await getCopy();
  const labels = {
    home: firm + " — " + t("Home"),
    mainNav: t("Main navigation"),
    mobileNav: t("Mobile navigation"),
    open: t("Open menu"),
    close: t("Close menu"),
    consult: t("Consultation via WhatsApp"),
    language: language === "id" ? "Bahasa situs" : "Site language",
  };

  return <html lang={language}><body>
    <a className="skip" href="#main">{t("Skip to content")}</a>
    <Header language={language} nav={nav.map(([label, href]) => [t(label), href])} labels={labels} switchLanguage={switchLanguage} />
    {children}
    <Footer />
    <a className="whatsapp-float" href={office.whatsapp} aria-label={t("Contact Us on WhatsApp")}>
      <MessageCircle size={23} aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  </body></html>;
}
