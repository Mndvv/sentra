# Kebijakan Keamanan (Security Policy)

Keamanan adalah prioritas utama kami di **NAWASENA SENTRA**. Kami berkomitmen penuh untuk menjaga integritas, kerahasiaan, dan ketersediaan sistem, serta melindungi data pengguna dan organisasi. 

Dokumen ini menjelaskan proses pelaporan kerentanan keamanan dan siklus hidup pemeliharaan keamanan untuk proyek ini.

## Versi yang Didukung (Supported Versions)

Kami sangat menyarankan pengguna untuk selalu menggunakan versi stabil terbaru dari sistem ini. Hanya versi (mayor/minor) terbaru yang secara aktif menerima pembaruan keamanan.

| Versi   | Status Dukungan Keamanan | Catatan                     |
| ------- | ------------------------ | --------------------------- |
| `1.0.x` | :white_check_mark: Didukung | Versi rilis stabil saat ini |
| `< 1.0` | :x: Tidak Didukung        | Pra-rilis (Alpha/Beta)      |

*(Catatan: Matriks di atas akan diperbarui seiring dengan rilis versi baru.)*

## Melaporkan Kerentanan (Reporting a Vulnerability)

Kami sangat menghargai upaya komunitas dalam membantu kami meningkatkan keamanan sistem ini. Jika Anda menemukan masalah keamanan atau kerentanan dalam proyek NAWASENA SENTRA, kami mohon agar Anda **tidak membukanya secara publik** (misalnya, melalui GitHub Issues publik) sebelum kerentanan tersebut diperbaiki.

Harap ikuti prosedur pengungkapan kerentanan secara bertanggung jawab (*Responsible Disclosure*) dengan langkah-langkah berikut:

1. **Kirimkan Laporan:** Kirim surel secara langsung kepada tim keamanan kami atau laporkan melalui fitur *GitHub Security Advisories* pada tab *Security* di repositori ini.
2. **Detail Kerentanan:** Sertakan informasi yang komprehensif, mencakup:
   - Deskripsi singkat mengenai kerentanan.
   - Langkah-langkah detail untuk mereproduksi masalah (*Proof of Concept*).
   - Potensi dampak jika kerentanan tersebut dieksploitasi.
   - Rekomendasi mitigasi atau perbaikan (opsional, namun sangat dihargai).
3. **Waktu Tanggapan (Response Time):** Tim keamanan kami akan memberikan konfirmasi penerimaan laporan Anda dalam waktu **48 jam**.
4. **Evaluasi dan Penambalan (Patching):** Kami akan mengevaluasi laporan Anda, memverifikasi masalah tersebut, dan mengembangkan *patch*. Kami berjanji untuk terus memberikan pembaruan perkembangan secara berkala kepada pelapor.
5. **Pengungkapan Publik (Public Disclosure):** Setelah perbaikan dirilis, kami akan mengakui kontribusi Anda (kecuali Anda meminta anonimitas) dalam catatan rilis (*release notes*) keamanan.

## Ancaman di Luar Ruang Lingkup (Out-of-Scope)

Beberapa masalah dengan dampak keamanan minimal atau tidak menimbulkan risiko secara langsung berada di luar cakupan kebijakan ini, termasuk namun tidak terbatas pada:
* Kurangnya mekanisme keamanan *defense-in-depth* (misalnya, ketiadaan *rate limiting* pada endpoint non-kritis).
* Praktik terbaik (*best practices*) yang tidak sepenuhnya diimplementasikan (misalnya, kurangnya *header* keamanan HTTP tertentu jika tidak menyebabkan kerentanan spesifik).
* Serangan *Denial of Service* (DoS) volumetrik tingkat rendah.

Terima kasih atas kontribusi Anda dalam menjaga keamanan ekosistem teknologi NAWASENA SENTRA.
