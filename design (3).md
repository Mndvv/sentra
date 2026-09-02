# Hero Section Redesign — SENTRA (Nawasena)

Scope: **hero section aja** (viewport pertama di `/`, sebelum section "Filosofi"). Section lain nggak disentuh.

---

## 1. Diagnosis — kenapa hero sekarang kerasa AI slop

Ini pola-pola yang bikin hero sekarang keliatan generic template, bukan sesuatu yang dirancang buat Nawasena spesifik:

- **Background gradient violet → near-black.** Ini salah satu default paling sering muncul kalau AI disuruh bikin "hero modern/futuristic" — nggak ada koneksi ke identitas Nawasena.
- **Badge pill "⭐ NAWASENA 2025/2026".** Eyebrow pill dengan icon bintang generic itu template SaaS landing page banget. Nggak encode informasi apa-apa selain "ini tahun kabinet".
- **Satu kata di-highlight pakai gradient purple→pink ("Cerah").** Ini literally pola hero AI-generated yang paling gampang dikenali: headline bold putih + satu kata gradient. 
- **Copy generic:** "Sebuah mercusuar digital yang mengintegrasikan gerak organisasi dan menampung titah aspirasi demi kemajuan sekolah." — kalimat ini technically udah punya metafora bagus (mercusuar!) tapi ditulis dengan bahasa corporate-mission-statement yang nggak kerasa niat.
- **Dua tombol pill (gradient filled + outline dark).** Pasangan CTA paling default yang ada di hampir semua template.
- **"Putar Radio" sebagai CTA hero, padahal ada player radio permanen di pojok kanan bawah.** Ini duplikasi fungsi — user udah bisa muter radio dari widget yang always-visible, jadi CTA ini nggak nambah value, cuma nambah "chrome" ke hero.
- **Ironisnya:** section "Filosofi" di bawah hero justru punya bahan yang bagus banget — "kompas moral", "cakrawala", "mercusuar digital", makna Sanskerta dari Nawasena — tapi hero-nya sama sekali nggak menggambarkan itu. Hero sekarang bisa dipasang di landing page startup SaaS mana pun tanpa ganti apa-apa selain nama.

Kesimpulan: masalah utamanya bukan "kurang polish", tapi hero-nya nggak digali dari isi Nawasena sendiri.

---

## 2. Arah desain baru

Konsep dasar: **hero-nya jadi instrumen navigasi, bukan poster.** Nawasena udah punya metafora "mercusuar digital" dan "kompas moral" di teks Filosofi mereka sendiri — draft ini literal-in-kan metafora itu jadi elemen visual, bukan cuma kalimat yang dilupakan.

### Palet warna

| Token | Hex | Peran |
|---|---|---|
| `ink` | `#0B1220` | Background utama — langit malam di atas laut, bukan violet generic |
| `signal` | `#F2A93B` | Amber/emas — warna cahaya mercusuar, accent utama & signature |
| `deep-teal` | `#163B40` | Sekunder — laut, dipakai di gradient halus & garis kompas |
| `fog` | `#EDEFF3` | Teks primer — putih hangat, bukan putih murni |
| `slate` | `#7C8798` | Teks sekunder / body copy |
| `line` | `#233047` | Border, divider, garis kompas — tipis dan senyap |

Kenapa bukan violet-pink gradient: itu udah jadi default AI paling gampang dikenali. Amber-on-navy justru langsung nyambung ke "mercusuar" tanpa perlu dijelasin.

### Tipografi

- **Display:** `Fraunces` (variable, ada karakter serif vintage/terukir — cocok buat kesan "plakat kompas/mercusuar", nggak dipakai buat body).
- **Body/UI:** `Inter` atau `IBM Plex Sans` — netral, gampang dibaca di navy background.
- **Mono (buat elemen instrumen):** `IBM Plex Mono` atau `JetBrains Mono` — dipakai khusus di readout koordinat/bearing, biar kerasa kayak instrumen, bukan dekorasi.

Jangan pakai mono buat headline atau body copy biasa — mono cuma buat data/koordinat.

### Layout (ASCII wireframe)

```
┌──────────────────────────────────────────────────────┐
│  SENTRA.                    Beranda Struktur ... 🌙   │
├──────────────────────────────────────────────────────┤
│                                                        │
│   06°28'13"S 107°04'26"E · KABINET 2025/2026          │  ← eyebrow mono, bukan pill
│                                                        │
│   Cahaya yang                        ·  ·  ·          │
│   Menuntun Arah.                    (compass rose      │  ← headline serif kiri,
│                                       tipis, muter      │    kompas di kanan sbg
│   Sebuah mercusuar digital untuk      pelan, jadi       │    counterweight visual
│   Nawasena — arah gerak organisasi   watermark bg)      │
│   dan tempat aspirasi berlabuh.                        │
│                                                        │
│   [ Jelajahi Program → ]   Baca Filosofi Kami          │  ← 1 CTA solid + 1 text link,
│                                                        │    bukan 2 pill button
└──────────────────────────────────────────────────────┘
```

Perubahan struktural dari versi lama:
- Teks **left-aligned**, bukan center-stack — biar nggak jatuh ke pola "logo tengah, headline tengah, CTA tengah" yang paling default.
- Compass rose jadi elemen visual di kanan, posisinya sebagai watermark besar-tipis (bukan ilustrasi ramai), imbang sama blok teks di kiri.
- Eyebrow ganti dari badge pill ke **readout koordinat** — koordinat asli SMAN 2 Jonggol (ada di footer web: -6.470356, 107.073695), diformat ke DMS. Ini encode informasi beneran (lokasi sekolah), bukan cuma label dekoratif.
- CTA drop dari 2 pill (termasuk "Putar Radio" yang duplikat sama player permanen) jadi 1 tombol solid + 1 text-link sekunder ke section Filosofi.

### Signature element

**Compass rose / bearing readout** yang muter pelan (satu putaran penuh ±40–60 detik, `prefers-reduced-motion` → freeze di satu posisi), dengan jarum yang secara visual "mengarah" ke arah teks headline. Elemen ini:
- Langsung motivated dari kata "kompas moral" & "mercusuar digital" yang Nawasena pakai sendiri di Filosofi.
- Jadi satu-satunya elemen motion yang berani di hero — nggak ada scroll-reveal bertumpuk atau hover-effect di mana-mana. Restraint di elemen lain, taruh "keberanian" cuma di kompas ini.
- Bisa dipakai ulang jadi favicon/section-divider di halaman lain kalau mau establish sebagai motif berulang.

---

## 3. Copy — draft (bisa disesuaikan)

Headline (pilih salah satu, jangan gabung):
1. **"Cahaya yang Menuntun Arah."** — paling dekat ke metafora mercusuar, singkat.
2. **"Menuju Cakrawala Bersama."** — narik kata "cakrawala" yang udah ada di teks Filosofi asli.
3. **"Satu Kompas, Satu Arah."** — nekanin makna "payung besar" yang nyatuin OSIS & MPK.

Subhead (pendamping opsi manapun di atas):
> "Sebuah mercusuar digital untuk Nawasena — arah gerak organisasi dan tempat aspirasi berlabuh."

(Lebih pendek dari versi lama, dan "berlabuh" nerusin metafora laut/mercusuar alih-alih kalimat administratif "menampung titah aspirasi".)

CTA:
- Primer: **"Jelajahi Program"** (lebih spesifik dari "Jelajahi" doang — jelasin ke mana user bakal diarahkan)
- Sekunder: **"Baca Filosofi Kami"** — text link, ngarah ke section Filosofi yang udah ada, biar dua section pertama kerasa nyambung.
- "Putar Radio" **dihapus dari hero**, cukup diakses lewat player permanen yang udah ada.

Eyebrow: `06°28'13"S 107°04'26"E · KABINET 2025/2026` (styled pakai mono font, letter-spacing lebar, ukuran kecil).

---

## 4. Catatan implementasi (vanilla HTML/CSS/JS)

- Font: import lewat `<link>` ke Google Fonts di `<head>` (atau self-host kalau mau kurangin request) — `Fraunces` (display), `Inter` atau `IBM Plex Sans` (body), `IBM Plex Mono` (readout). Set sebagai CSS custom properties biar gampang dipanggil ulang:
  ```css
  :root {
    --font-display: "Fraunces", serif;
    --font-body: "Inter", sans-serif;
    --font-mono: "IBM Plex Mono", monospace;
  }
  ```
- Token warna sebagai CSS custom properties di `:root` (bukan hardcode hex di tiap rule), biar konsisten kalau dipakai lagi di section lain:
  ```css
  :root {
    --color-ink: #0B1220;
    --color-signal: #F2A93B;
    --color-deep-teal: #163B40;
    --color-fog: #EDEFF3;
    --color-slate: #7C8798;
    --color-line: #233047;
  }
  ```
- Compass rose: SVG inline di HTML (bukan `<img>`, biar bisa di-style/animate lewat CSS). Rotate pakai `@keyframes` + `animation: spin 50s linear infinite` di elemen pembungkusnya.
- Reduced motion — wajib di-handle manual di vanilla CSS (nggak ada utility class kayak Tailwind):
  ```css
  @media (prefers-reduced-motion: reduce) {
    .compass-rose { animation: none; }
  }
  ```
- Koordinat di eyebrow: taruh sebagai satu constant di JS (atau data-attribute di HTML) yang di-reuse buat generate string DMS-nya, biar nggak ada dua tempat yang bisa out-of-sync sama koordinat yang dipakai di embed Google Maps footer.
- Kalau ada logic buat animasi/interaksi tambahan (misal jarum kompas beneran ngikutin sesuatu, bukan cuma spin konstan), taruh di file JS terpisah (`hero.js`) yang di-attach lewat `<script defer src="...">` — jangan inline `<script>` di tengah HTML biar gampang di-maintain.
- Cek kontras `--color-signal` (#F2A93B) di atas `--color-ink` (#0B1220) — udah AA-safe buat teks besar, tapi cek lagi kalau dipakai buat teks kecil/body.
- Compass rose sebagai watermark: opacity rendah (±15–25%, pakai `opacity` di CSS) supaya nggak kompetisi sama headline, dan pastikan headline tetep punya contrast ratio aman meskipun compass ada di belakang/overlap (z-index & positioning diatur biar teks selalu di atas).

---

## 5. Yang sengaja nggak diubah

- Layout & fungsi section-section lain (Filosofi, Agenda, Radio, Proker, Dokumentasi) — di luar scope.
- Struktur navbar atas.
- Player radio permanen di pojok kanan bawah — tetep ada, cuma nggak didobel-fungsikan di hero.
