import Image from "next/image";
import { notFound } from "next/navigation";
import { ContactDetails } from "../../components/sections";
import { getCopy } from "../../lib/language";
import { about, firm, office } from "../../lib/content";

const titles = { about: "About " + firm, "practice-areas": "Practice Areas", contact: "Contact" };
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(titles).map((section) => ({ section }));
}

export async function generateMetadata({ params }) {
  const { section } = await params;
  const { t } = await getCopy();
  return Object.hasOwn(titles, section) ? { title: t(titles[section]), alternates: { canonical: `/${section}` } } : {};
}

export default async function InformationPage({ params }) {
  const { section } = await params;
  if (!Object.hasOwn(titles, section)) notFound();

  const { t, language, practices } = await getCopy();

  if (section === "about") {
    return <main id="main" className="section inner-page">
      <div className="container">
        <div className="grid about-profile">
          <div className="profile-copy">
            <p className="eyebrow">{t("About the firm")}</p>
            <h1>{t(titles.about)}</h1>
            <p className="lead">{t(about)}</p>
            <a className="button" href="/practice-areas">{t("Explore Practice Areas")}</a>
          </div>
          <div className="profile-photo">
            <Image src="/images/about.webp" alt="" fill priority sizes="(max-width: 767px) 100vw, 54vw" />
          </div>
        </div>
        <div className="grid profile-band dark-section" data-theme="dark">
          <div>
            <p className="eyebrow">{t("Business Law in Indonesia")}</p>
            <h2>{t("A Business Perspective on Legal Decisions")}</h2>
          </div>
          <div>
            <p className="lead">{t("Legal guidance for businesses, investors, and domestic and international clients navigating Indonesian law.")}</p>
            <a className="button light" href={office.whatsapp}>{t("Consultation via WhatsApp")}</a>
          </div>
        </div>
      </div>
    </main>;
  }

  if (section === "practice-areas") {
    return <main id="main" className="section inner-page">
      <div className="container">
        <div className="inner-title">
          <p className="eyebrow">{t("Business Law in Indonesia")}</p>
          <h1>{t(titles[section])}</h1>
        </div>
        <div className="service-cards">
          {practices.map(({ slug, title, summary, image }) => <article key={slug} id={slug} className="service-card">
            <div className="service-photo"><Image src={`/images/${image}.webp`} alt="" fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" /></div>
            <div className="service-copy"><h2>{title}</h2><p>{summary}</p></div>
          </article>)}
        </div>
      </div>
    </main>;
  }

  const mapQuery = encodeURIComponent(firm + " - BSD Office, " + office.address);
  return <main id="main" className="section inner-page">
    <div className="container">
      <div className="inner-title">
        <p className="eyebrow">{firm}</p>
        <h1>{t(titles[section])}</h1>
      </div>
      <div className="grid contact-layout">
        <div className="consult-panel contact-card">
          <ContactDetails />
          <a className="button light" href={office.whatsapp}>{t("Contact Us on WhatsApp")}</a>
        </div>
        <iframe className="contact-map" src={`https://maps.google.com/maps?q=${mapQuery}&hl=${language}&z=16&output=embed`}
          title={language === "id" ? "Peta Google kantor Delmore BSD" : "Google Map of Delmore BSD Office"}
          loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
      </div>
    </div>
  </main>;
}
