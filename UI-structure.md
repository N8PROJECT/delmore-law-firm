# Institutional Navy — UI Structure

## 1. Product brief
Firma corporate dan lintas yurisdiksi; kredibilitas institusional. Referensi: Delaney × EquityLegal × LexGuard × Juriso. Primary conversion: permintaan konsultasi. Secondary: memahami praktik, membaca profil tim, memeriksa kredibilitas. Struktur ini adalah homepage baru, bukan rekonstruksi piksel. Copy merupakan contoh yang harus disesuaikan dengan firma.

## 2. Information architecture
```text
/
├── /tentang
├── /layanan/[slug]
├── /tim/[slug]
├── /studi-kasus/[slug]
├── /wawasan/[slug]
├── /kontak
├── /kebijakan-privasi
└── /ketentuan
```
Navigation homepage dapat memakai anchor; detail memakai URL. CTA konsultasi menuju #consultation atau /kontak jika form tidak berada di homepage. Jangan membuat link mati.

## 3. Section order / wireframe
```text
01 | Header | Nav putih, CTA navy
02 | Hero | 12 kolom foto; overlay teks 7
03 | Credentials | 4 metrik dan logo wall
04 | About | Foto 5, copy 7
05 | Practice matrix | Dark section: daftar 7, media 5
06 | Industry solutions | 4 tab dan panel 7/5
07 | Leadership | 3 kartu portrait 4/4/4
08 | Insights | 3 kartu berita
09 | Consultation | Copy 5, form navy 7
10 | Footer | 4 kolom navy
```

## 4. Section specifications

### 01. Header
- **Inspirasi / swap:** Delaney + LexGuard.
- **Desktop:** Nav putih, CTA navy. Gunakan container dan grid dari design-system.md; align top kecuali hero.
- **Konten:** Praktik, Tim, Industri, Insights, Kontak.
- **Interaksi:** Sticky.
- **Tablet/mobile:** Drawer. Pada tablet gunakan grid 8 kolom dan pindah ke stack jika lebar konten tidak cukup.
- **Semantik & QA:** header/nav dan tombol menu berlabel; focus kembali saat ditutup.

### 02. Hero
- **Inspirasi / swap:** Delaney + LexGuard.
- **Desktop:** 12 kolom foto; overlay teks 7. Gunakan container dan grid dari design-system.md; align top kecuali hero.
- **Konten:** H1: Mitra hukum untuk pertumbuhan bisnis; CTA.
- **Interaksi:** CTA ke konsultasi.
- **Tablet/mobile:** Teks dan foto stack. Pada tablet gunakan grid 8 kolom dan pindah ke stack jika lebar konten tidak cukup.
- **Semantik & QA:** H1 tunggal; gambar dekoratif alt kosong; CTA terlihat tanpa scroll berlebihan.

### 03. Credentials
- **Inspirasi / swap:** EquityLegal.
- **Desktop:** 4 metrik dan logo wall. Gunakan container dan grid dari design-system.md; align top kecuali hero.
- **Konten:** Kredensial dan afiliasi yang sah.
- **Interaksi:** Link ke bukti jika ada.
- **Tablet/mobile:** 2 × 2. Pada tablet gunakan grid 8 kolom dan pindah ke stack jika lebar konten tidak cukup.
- **Semantik & QA:** section dengan heading H2, urutan DOM sesuai visual, link/tombol dengan accessible name.

### 04. About
- **Inspirasi / swap:** Delaney.
- **Desktop:** Foto 5, copy 7. Gunakan container dan grid dari design-system.md; align top kecuali hero.
- **Konten:** Sejarah dan cakupan firma.
- **Interaksi:** Link profil.
- **Tablet/mobile:** Stack. Pada tablet gunakan grid 8 kolom dan pindah ke stack jika lebar konten tidak cukup.
- **Semantik & QA:** section dengan heading H2, urutan DOM sesuai visual, link/tombol dengan accessible name.

### 05. Practice matrix
- **Inspirasi / swap:** LexGuard + EquityLegal.
- **Desktop:** Dark section: daftar 7, media 5. Gunakan container dan grid dari design-system.md; align top kecuali hero.
- **Konten:** Corporate, transaksi, compliance, sengketa.
- **Interaksi:** Accordion dengan media aktif.
- **Tablet/mobile:** Stack. Pada tablet gunakan grid 8 kolom dan pindah ke stack jika lebar konten tidak cukup.
- **Semantik & QA:** section dengan heading H2, urutan DOM sesuai visual, link/tombol dengan accessible name.

### 06. Industry solutions
- **Inspirasi / swap:** Westbridge.
- **Desktop:** 4 tab dan panel 7/5. Gunakan container dan grid dari design-system.md; align top kecuali hero.
- **Konten:** Keuangan, teknologi, properti, infrastruktur.
- **Interaksi:** Tab keyboard-accessible.
- **Tablet/mobile:** Tab wrap. Pada tablet gunakan grid 8 kolom dan pindah ke stack jika lebar konten tidak cukup.
- **Semantik & QA:** section dengan heading H2, urutan DOM sesuai visual, link/tombol dengan accessible name.

### 07. Leadership
- **Inspirasi / swap:** Lawfeed.
- **Desktop:** 3 kartu portrait 4/4/4. Gunakan container dan grid dari design-system.md; align top kecuali hero.
- **Konten:** Partner, bidang, lokasi.
- **Interaksi:** Link profil.
- **Tablet/mobile:** Grid 1–2. Pada tablet gunakan grid 8 kolom dan pindah ke stack jika lebar konten tidak cukup.
- **Semantik & QA:** section dengan heading H2, urutan DOM sesuai visual, link/tombol dengan accessible name.

### 08. Insights
- **Inspirasi / swap:** Delaney + EquityLegal.
- **Desktop:** 3 kartu berita. Gunakan container dan grid dari design-system.md; align top kecuali hero.
- **Konten:** Tanggal, kategori, judul.
- **Interaksi:** Link artikel.
- **Tablet/mobile:** Stack. Pada tablet gunakan grid 8 kolom dan pindah ke stack jika lebar konten tidak cukup.
- **Semantik & QA:** section dengan heading H2, urutan DOM sesuai visual, link/tombol dengan accessible name.

### 09. Consultation
- **Inspirasi / swap:** Delaney.
- **Desktop:** Copy 5, form navy 7. Gunakan container dan grid dari design-system.md; align top kecuali hero.
- **Konten:** Permintaan konsultasi bisnis.
- **Interaksi:** Validasi dan konfirmasi.
- **Tablet/mobile:** Stack. Pada tablet gunakan grid 8 kolom dan pindah ke stack jika lebar konten tidak cukup.
- **Semantik & QA:** section dengan heading H2, urutan DOM sesuai visual, link/tombol dengan accessible name.

### 10. Footer
- **Inspirasi / swap:** Delaney.
- **Desktop:** 4 kolom navy. Gunakan container dan grid dari design-system.md; align top kecuali hero.
- **Konten:** Alamat, kontak, link, kebijakan.
- **Interaksi:** Link kontak.
- **Tablet/mobile:** Stack. Pada tablet gunakan grid 8 kolom dan pindah ke stack jika lebar konten tidak cukup.
- **Semantik & QA:** footer landmark, kelompok link dan kontak yang valid.

## 5. Interaction flows
```text
Visitor → Hero CTA → Consultation form → Validate → Submit → Success / Error
Visitor → Practice accordion → Practice detail → Consultation
Visitor → Attorney profile → Related practice → Consultation
Visitor → Case or insight → Detail → Related service → Consultation
```

### Consultation form contract
| Field | Type | Rule |
|---|---|---|
| Nama | text | required, trim, max 100 |
| Email | email | required, valid format |
| Telepon | tel | optional, allow international format |
| Topik | select | required; other option |
| Pesan | textarea | required, max 2000; jangan minta rahasia perkara |
| Persetujuan privasi | checkbox | required untuk pengiriman |

Tampilkan pemberitahuan bahwa pengiriman tidak otomatis membentuk hubungan pengacara-klien. Client dan server validation, rate limiting, HTTPS, minimisasi data. Loading: tombol disabled + label Mengirim. Error: pertahankan input, tampilkan pesan spesifik, focus error pertama. Success hanya setelah server mengonfirmasi; tampilkan langkah berikutnya tanpa menjanjikan waktu respons yang belum disepakati.

## 6. Content model & component tree
```text
AppShell
  SkipLink
  Header / MobileNav
  Main
    HeroSection
    CredentialsSection
    AboutSection
    PracticeMatrixSection
    IndustrySolutionsSection
    LeadershipSection
    InsightsSection
    ConsultationSection
  Footer
```
Data collections: practice {slug,title,summary,body,image}; attorney {slug,name,role,practiceIds,portrait,bio}; case {slug,title,context,approach,outcome,permission}; insight {slug,title,date,category,excerpt,body,image}; testimonial {quote,attribution,permission}; settings {contact,nav,legal,branding}. Jika koleksi kosong, hilangkan section non-esensial atau tampilkan empty state yang informatif; jangan isi dengan bukti sosial fiktif.

## 7. Responsive behavior & SEO
- Desktop 12 kolom; tablet 8; mobile 4; tidak ada fixed-height untuk konten teks. Hero min-height 560px desktop bila foto full bleed; mobile auto.
- Gambar responsif, ukuran reservasi aspect-ratio, crop terarah. Kartu panjang mengikuti isi. Untuk horizontal track, sediakan tombol dan akses keyboard.
- Sticky navigation memakai scroll-margin-top pada anchor. Drawer tidak tampil bersamaan dengan desktop nav.
- Title unik, meta description, canonical, OG image; structured data LegalService hanya dari informasi nyata.

## 8. Acceptance criteria
1. Semua section muncul dalam urutan yang dirancang; grid tidak overflow pada 320px.
2. CTA dari hero, service, case dan footer menuju tujuan yang benar.
3. Accordion/tab/drawer dapat dipakai dengan keyboard dan screen reader; state tersimpan selama interaksi halaman.
4. Form menangani valid, invalid, network failure, server failure, duplicate submit dan success.
5. Konten tanpa JS masih dapat dibaca; gambar dan animasi tidak menghambat akses.
6. Tidak ada placeholder statistik, logo, foto atau testimonial yang dipresentasikan sebagai fakta.
7. Uji visual pada 390, 768, 1024, 1440; uji long copy dan zoom.
