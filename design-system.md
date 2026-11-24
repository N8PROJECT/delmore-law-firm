# Institutional Navy — Design System

Status: proposal v1.0 · Website law firm · Bahasa Indonesia · Delaney × EquityLegal × LexGuard × Juriso

## 1. Design direction
Firma corporate dan lintas yurisdiksi; kredibilitas institusional. Hero arsitektur full width dengan overlay navy dan panel informasi. Utamakan keterbacaan, kepercayaan dan jalur konsultasi. Gunakan ritme editorial, bukan dekorasi berlebihan. Referensi adalah inspirasi komposisi, bukan aset siap pakai.

## 2. Foundations & tokens

| Token | Nilai | Penggunaan |
|---|---|---|
| canvas | `#FFFFFF` | Latar utama |
| surface | `#EEF3F7` | Section alternatif, card |
| ink | `#102B43` | Heading dan teks utama |
| muted | `#465968` | Deskripsi sekunder |
| accent | `#163F65` | Link/aksen/CTA bila kontras cukup |
| on-accent | `#FFFFFF` | Teks CTA |
| border | `#CDD9E2` | Divider dekoratif |
| dark | `#081D30` | Section gelap |
| on-dark | `#FFFFFF` | Teks di section gelap |
| error | `#B42318` | Error pada latar terang |
| success | `#166534` | Status sukses pada latar terang |
| focus | `#2563EB` | Focus ring; gunakan putih di latar gelap |

CTA default memakai dark/on-dark agar konsisten; accent hanya untuk teks/CTA setelah uji kontras. Warna tidak menjadi satu-satunya indikator. Border input gunakan #737373 bila border dekoratif terlalu samar.

```css
:root {
  --color-bg: #FFFFFF; --color-surface: #EEF3F7;
  --color-text: #102B43; --color-muted: #465968;
  --color-accent: #163F65; --color-on-accent: #FFFFFF;
  --color-border: #CDD9E2; --color-dark: #081D30; --color-on-dark: #fff;
  --font-display: "Source Sans 3", sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --radius-card: 4px; --radius-button: 0px;
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-5: 20px; --space-6: 24px; --space-8: 32px; --space-10: 40px;
  --space-12: 48px; --space-16: 64px; --space-20: 80px; --space-24: 96px;
  --container: 1280px; --gutter: clamp(20px, 4vw, 64px);
  --section-y: clamp(56px, 8vw, 120px); --card-gap: 12px;
  --motion-fast: 150ms; --motion-base: 240ms;
}
* { box-sizing: border-box; }
body { margin: 0; font-family: var(--font-body); color: var(--color-text); background: var(--color-bg); }
.container { width: min(calc(100% - 2 * var(--gutter)), var(--container)); margin-inline: auto; }
:focus-visible { outline: 3px solid #2563EB; outline-offset: 4px; }
[data-theme="dark"] :focus-visible { outline-color: #fff; }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; scroll-behavior: auto !important; } }
```

## 3. Typography
Display: Source Sans 3; body/UI: Inter. Self-host WOFF2 berlisensi, fallback sistem, font-display swap.

| Role | Desktop / mobile | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero H1 | 64–80 / 36–44 px | 600–700 | 1.02–1.12 | -0.035em |
| H2 | 40–52 / 28–36 px | 600 | 1.12 | -0.025em |
| H3 | 26 / 22 px | 600 | 1.25 | -0.015em |
| Body lead | 20 / 18 px | 400 | 1.55 | normal |
| Body | 16 / 16 px | 400 | 1.65 | normal |
| UI label | 14 / 14 px | 600 | 1.4 | normal |
| Caption | 13 / 13 px | 400 | 1.5 | normal |

Satu H1 per halaman, heading berurutan, panjang baris body 45–70 karakter. Jangan gunakan gambar sebagai teks. Headline tidak dipotong; gunakan clamp dan wrap.

## 4. Layout & responsive
| Viewport | Grid | Gutter | Gap | Section padding |
|---|---|---|---|---|
| 320–639 | 4 | 20px | 16px | 56px |
| 640–1023 | 8 | 32px | 20px | 72px |
| 1024–1439 | 12 | 48px | 24px | 96px |
| ≥1440 | 12 | 64px | 24–32px | 120px |
Container max 1280px; hero dapat full bleed. Pada tablet ubah split menjadi 4/4 atau stack jika copy sempit. Mobile: urutan DOM mengikuti bacaan, tanpa horizontal overflow kecuali carousel eksplisit. Gunakan spacing scale 4px; section gap lebih besar dari card gap.

## 5. Visual assets
- Hero 16:9 atau portrait 4:5 untuk split; team 4:5; cases 3:2; insights 16:10.
- Foto asli firma, arsitektur, atau stok berlisensi; hindari wajah sintetis yang diklaim sebagai lawyer nyata.
- Overlay gelap bertahap hanya jika teks di atas foto; uji pada crop paling terang. Gunakan object-position per aset.
- Ikon outline 24px, stroke 1.5–2px, satu keluarga ikon. Dekorasi aria-hidden.
- Card radius 4px; shadow default none; dropdown/modal shadow 0 12px 32px #0002. Divider 1px.

## 6. Component contracts
| Komponen | Anatomi & ukuran | Variants / states |
|---|---|---|
| Button | label + optional icon 16px; min-height 48; padding 12/20 | primary dark, secondary outline, text; hover, focus, active, disabled, loading |
| Header | logo, nav, CTA, menu; desktop 80px / mobile 64px | default, scrolled, menu open |
| Section heading | eyebrow 13px, H2, lead, optional link | left, center, editorial split |
| Proof metric | value 40–56px, caption, optional source | verified only; omit if missing |
| Accordion | semantic button, title, chevron, panel; row min 56px | closed/open/focus; aria-expanded + aria-controls |
| Attorney card | image, name H3, role, practice, profile link | default/hover/focus; no hover-only content |
| Case card | image, category, title, summary, link | default/hover/focus; no fabricated outcomes |
| Insight card | image, date, category, title, excerpt | default/hover/focus |
| Tabs | tablist, tabs, panel | selected/unselected/focus; arrows/Home/End |
| Carousel | track, items, prev/next, position | start/end/drag/focus; no autoplay |
| Form field | visible label, input min 48px, hint/error | empty, filled, focus, invalid, disabled |
| Alert | icon + message + optional action | success/error/info; role status or alert |
| Footer | wordmark, link groups, contact, legal | desktop columns / mobile stack |

Button treatment: square. Hover gunakan perubahan underline/border atau luminance, tidak mengubah ukuran. Disabled tampil jelas dan tidak menerima klik; loading menjaga lebar dan mencegah double submit. Focus tidak boleh tertutup sticky header.

## 7. Motion & interaction
150ms hover; 240ms accordion/drawer; easing cubic-bezier(.2,.8,.2,1). Reveal opsional opacity + translateY 12px sekali, konten tetap terlihat tanpa JS. Tidak ada parallax wajib, autoplay video atau scroll hijacking. Drawer modal mengunci focus, Escape menutup, focus kembali ke pemicu. Video memakai poster, caption/transkrip dan kontrol.

## 8. Accessibility & content
Target WCAG 2.2 AA: teks normal ≥4.5:1, teks besar ≥3:1, kontrol penting ≥3:1; cek token aktual pada semua state. Target sentuh 44×44px, skip link, landmark header/nav/main/footer, alt bermakna, keyboard penuh, zoom 200%, reflow 320px. Semua form label eksplisit. Jangan pakai placeholder sebagai label. Error diumumkan dan terkait aria-describedby. Tidak menjanjikan kemenangan atau memakai klaim, logo, testimoni tanpa bukti/izin.

## 9. Engineering handoff
Framework-agnostic; dapat diterapkan di React/Next.js atau HTML/CSS. Pisahkan token, primitive, composite, section, page. CMS model: Practice, Attorney, CaseStudy, Insight, Testimonial, SiteSettings. Gunakan responsive srcset, AVIF/WebP, dimensi gambar eksplisit; hero LCP tidak lazy, media bawah fold lazy. Target p75 LCP ≤2.5s, INP ≤200ms, CLS ≤0.1. Uji 320/390/768/1024/1440/1920, keyboard, reduced motion, slow network, empty content, error form.

## 10. Definition of done
- Token diterapkan konsisten; tidak ada hardcoded warna/spacing tanpa alasan.
- Semua section mengikuti UI-structure.md dan semua CTA bekerja.
- Foto, konten, klaim, izin publikasi telah disetujui.
- Kontras, responsive, keyboard, SEO dan performa diuji pada implementasi nyata.
