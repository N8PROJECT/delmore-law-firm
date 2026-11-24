"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls, useInView, useReducedMotion, useScroll } from "framer-motion";
import { Building2, ChevronDown, Handshake, Menu, Scale, ShieldCheck, X } from "lucide-react";
import { office } from "../lib/content";

const easing = [0.2, 0.8, 0.2, 1];
const icons = { building: Building2, handshake: Handshake, shield: ShieldCheck, scale: Scale };

export function Brand({ homeLabel }) {
  return <a className="brand" href="/" aria-label={homeLabel}>
    <span>DELMORE<span className="brand-secondary">LAW FIRM</span></span>
  </a>;
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />;
}

export function Header({ language, nav, labels, switchLanguage }) {
  const dialog = useRef(null);
  const trigger = useRef(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    function update() { setScrolled(window.scrollY > 8); }
    const desktop = window.matchMedia("(min-width: 1024px)");
    function onResize() { if (desktop.matches && dialog.current.open) dialog.current.close(); }
    update();
    window.addEventListener("scroll", update, { passive: true });
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("scroll", update);
      desktop.removeEventListener("change", onResize);
    };
  }, []);
  function showMenu() {
    dialog.current.showModal();
    setOpen(true);
  }
  function afterClose() {
    setOpen(false);
    trigger.current.focus({ preventScroll: true });
  }
  return <header className={scrolled ? "header scrolled" : "header"}>
    <div className="container header-inner">
      <Brand homeLabel={labels.home} />
      <nav className="desktop-nav" aria-label={labels.mainNav}>
        {nav.map(([label, href]) => <a key={href} href={"/" + href}>{label}</a>)}
      </nav>
      <div className="header-actions">
        <form className="language-switch" action={switchLanguage} aria-label={labels.language}>
          <button name="language" value="en" lang="en" aria-label="English" aria-pressed={language === "en"}>EN</button>
          <button name="language" value="id" lang="id" aria-label="Bahasa Indonesia" aria-pressed={language === "id"}>ID</button>
        </form>
        <a className="button header-cta" href={office.whatsapp}>{labels.consult}</a>
        <button ref={trigger} className="icon-button menu-toggle" type="button" aria-label={labels.open} aria-haspopup="dialog" aria-expanded={open} aria-controls="mobile-nav" onClick={showMenu}><Menu aria-hidden="true" /></button>
      </div>
    </div>
    <dialog ref={dialog} id="mobile-nav" className="drawer" aria-labelledby="menu-heading" onClose={afterClose}>
      <div className="drawer-heading"><h2 id="menu-heading">Menu</h2><button className="icon-button" type="button" aria-label={labels.close} onClick={() => dialog.current.close()}><X aria-hidden="true" /></button></div>
      <nav aria-label={labels.mobileNav}>
        {nav.map(([label, href]) => <a key={href} href={"/" + href} onClick={() => dialog.current.close()}>{label}</a>)}
      </nav>
      <a className="button" href={office.whatsapp} onClick={() => dialog.current.close()}>{labels.consult}</a>
    </dialog>
    <ScrollProgress />
  </header>;
}

export function Reveal({ children, className, delay = 0 }) {
  const ref = useRef(null);
  const visible = useInView(ref, { once: false, amount: "some", margin: "0px 0px -40px 0px" });
  const reduced = useReducedMotion();
  const controls = useAnimationControls();
  useEffect(() => {
    if (!visible || reduced) {
      controls.stop();
      controls.set({ opacity: 1, y: 0 });
      return;
    }
    controls.set({ opacity: 0.15, y: 36 });
    void controls.start({ opacity: 1, y: 0, transition: { duration: 0.68, delay, ease: easing } });
    return () => controls.stop();
  }, [visible, reduced, controls, delay]);
  return <motion.div ref={ref} className={className} initial={false} animate={controls} data-reveal>{children}</motion.div>;
}

export function PracticeMatrix({ practices }) {
  const [active, setActive] = useState(0);
  return <div className="grid practice-grid">
    <div className="practice-list">
      {practices.map((practice, i) => {
        const Icon = icons[practice.icon];
        const expanded = active === i;
        return <div className="practice-row" key={practice.slug}>
          <h3><button type="button" className="practice-toggle" id={`practice-trigger-${i}`} aria-expanded={expanded} aria-controls={`practice-panel-${i}`} onClick={() => setActive(expanded ? -1 : i)}>
            <Icon size={24} strokeWidth={1.6} aria-hidden="true" /><span>{practice.title}</span><ChevronDown size={19} aria-hidden="true" />
          </button></h3>
          <div className={`accordion-panel ${expanded ? "expanded" : ""}`} id={`practice-panel-${i}`} role="region" aria-labelledby={`practice-trigger-${i}`} inert={!expanded}>
            <div><p>{practice.summary}</p></div>
          </div>
        </div>;
      })}
    </div>
    <div className="practice-visual" key={practices[Math.max(active, 0)].image}>
      <Image alt="" src={`/images/${practices[Math.max(active, 0)].image}.webp`} fill sizes="(max-width: 1023px) 90vw, 38vw" />
    </div>
    <noscript><ul>{practices.map((practice) => <li key={practice.slug}><strong>{practice.title}</strong> · {practice.summary}</li>)}</ul></noscript>
  </div>;
}
