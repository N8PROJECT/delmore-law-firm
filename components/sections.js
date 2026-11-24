import Image from "next/image";
import { Globe2 } from "lucide-react";
import { about, firm, nav, office } from "../lib/content";
import { getCopy } from "../lib/language";
import { Brand, PracticeMatrix, Reveal } from "./interactive";

export async function ContactDetails() {
  const { t } = await getCopy();
  return <div className="contact-details">
    <h2>{t(office.name)}</h2>
    <address>{t(office.address)}</address>
    <p>{t("Phone and WhatsApp")} <a href={office.telephone}>{office.phone}</a></p>
    <p>{t("Monday–Friday, open 24 hours")}<br />{t("Saturday–Sunday, closed")}</p>
    <a className="text-link" href={office.profile}>{t("View Google Business Profile")}</a>
  </div>;
}

export async function HomeSections() {
  const { t, practices } = await getCopy();
  return <>
    <section className="hero" data-theme="dark" aria-labelledby="hero-title">
      <div className="hero-image"><Image src="/images/hero.webp" alt="" fill preload sizes="100vw" /></div>
      <div className="container hero-inner">
        <div className="hero-copy">
          <Reveal>
            <p className="eyebrow">{t("Business Law in Indonesia")}</p>
            <h1 id="hero-title">{t("Practical Legal Solutions for Your Business")}</h1>
          </Reveal>
          <Reveal delay={0.12}><p className="lead">{t("Legal guidance for businesses, investors, and domestic and international clients navigating Indonesian law.")}</p></Reveal>
          <Reveal delay={0.22}><div className="hero-actions">
            <a className="button light" href={office.whatsapp}>{t("Consultation via WhatsApp")}</a>
            <a className="button outline" href="#practice">{t("Explore Practice Areas")}</a>
          </div></Reveal>
        </div>
        <Reveal className="hero-note" delay={0.28}><Globe2 size={24} strokeWidth={1.5} aria-hidden="true" /><div><strong>{t("Based in South Tangerang")}</strong><span>{t("Serving domestic and international clients")}</span></div></Reveal>
      </div>
    </section>

    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container grid">
        <Reveal className="about-image"><Image src="/images/about.webp" alt="" fill sizes="(max-width: 1023px) 90vw, 38vw" /></Reveal>
        <Reveal className="about-copy" delay={0.08}>
          <div className="section-heading"><p className="eyebrow">{t("About the firm")}</p><h2 id="about-title">{t("A Business Perspective on Legal Decisions")}</h2></div>
          <p>{t(about)}</p>
          <a className="text-link" href="/about">{t("About Delmore Law Firm")}</a>
        </Reveal>
      </div>
    </section>

    <section className="section dark-section" id="practice" data-theme="dark" aria-labelledby="practice-title">
      <div className="container">
        <Reveal className="section-heading"><p className="eyebrow">{t("Practice Areas")}</p><h2 id="practice-title">{t("Business Law Services")}</h2></Reveal>
        <Reveal className="section-content"><PracticeMatrix practices={practices} /></Reveal>
      </div>
    </section>

    <section className="section" id="consultation" aria-labelledby="consultation-title">
      <div className="container grid">
        <Reveal className="consult-copy">
          <div className="section-heading"><p className="eyebrow">{t("Consultation")}</p><h2 id="consultation-title">{t("Discuss Your Legal Needs")}</h2>
            <p className="lead">{t("Contact our BSD office on WhatsApp to discuss how we can help.")}</p>
          </div>
          <a className="button" href={office.whatsapp}>{t("Contact Us on WhatsApp")}</a>
        </Reveal>
        <Reveal className="consult-panel" delay={0.08}><ContactDetails /></Reveal>
      </div>
    </section>
  </>;
}

export async function Footer() {
  const { t, practices } = await getCopy();
  return <footer className="footer" data-theme="dark">
    <div className="container">
      <Reveal className="grid footer-grid">
        <div><Brand homeLabel={firm + " — " + t("Home")} /><p>{t("Business law in Indonesia")}<br />{t("BSD Office, South Tangerang")}</p></div>
        <div><h2>{t("Explore")}</h2><ul>{nav.map(([label, href]) => <li key={href}><a href={"/" + href}>{t(label)}</a></li>)}</ul></div>
        <div><h2>{t("Practice Areas")}</h2><ul>{practices.map(({ slug, title }) => <li key={slug}><a href={`/practice-areas#${slug}`}>{title}</a></li>)}</ul></div>
        <div><h2>{t("Contact")}</h2><ul><li><a href={office.telephone}>{office.phone}</a></li><li><a href={office.whatsapp}>WhatsApp</a></li></ul></div>
      </Reveal>
      <div className="footer-bottom"><p>© {new Date().getFullYear()} {firm}</p></div>
    </div>
  </footer>;
}
