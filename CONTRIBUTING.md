# Panduan Kontribusi (Contributing Guidelines)

Pertama-tama, terima kasih telah meluangkan waktu untuk berkontribusi pada **NAWASENA SENTRA**! 🚀

Sebagai sistem berskala *enterprise* yang dirancang untuk modernisasi institusi pendidikan, kami menerapkan standar rekayasa perangkat lunak yang ketat untuk menjaga keandalan (*reliability*), skalabilitas, dan kemudahan pemeliharaan (*maintainability*).

Panduan ini mendefinisikan proses, alur kerja (*workflow*), dan standar kualitas kode yang diharapkan dari semua kontributor, termasuk tim inti dan kontributor eksternal.

## 📋 Daftar Isi
1. [Arsitektur & Konvensi Proyek](#arsitektur--konvensi-proyek)
2. [Menyiapkan Lingkungan Pengembangan](#menyiapkan-lingkungan-pengembangan)
3. [Alur Kerja (Git Workflow)](#alur-kerja-git-workflow)
4. [Konvensi Penamaan Branch](#konvensi-penamaan-branch)
5. [Konvensi Pesan Commit](#konvensi-pesan-commit-conventional-commits)
6. [Proses Pull Request (PR)](#proses-pull-request-pr)
7. [Standar Kode & Pengujian](#standar-kode--pengujian)

---

## Arsitektur & Konvensi Proyek

NAWASENA SENTRA mengadopsi prinsip desain berbasis komponen (*Component-Driven Design*) dan pendekatan modular. Sebelum berkontribusi, pastikan Anda memahami struktur direktori utama:
- `css/`: Menyimpan abstraksi gaya (*styling*), variabel, dan utilitas (*utility classes*).
- `js/`: Menyimpan logika sisi klien (*client-side logic*), terpisah berdasarkan modul independen.
- *Direktori dan arsitektur akan terus berkembang seiring dengan penskalaan sistem. Harap perhatikan struktur sebelum menambah file baru.*

## Menyiapkan Lingkungan Pengembangan

Untuk berkontribusi, siapkan lingkungan pengembangan lokal Anda dengan langkah berikut:

1. **Fork repositori ini** (terutama untuk kontributor eksternal).
2. **Kloning ke mesin lokal Anda:**
   ```bash
   git clone https://github.com/NAWASENA-Development-Team/sentra.git
   cd sentra
   ```
3. **Tambahkan remote upstream** (agar tetap sinkron dengan repositori utama):
   ```bash
   git remote add upstream https://github.com/NAWASENA-Development-Team/sentra.git
   ```

## Alur Kerja (Git Workflow)

Kami menggunakan model **Feature Branch Workflow**. Cabang utama (`main` atau `master`) mewakili sejarah kode yang stabil dan siap produksi.

1. Selalu buat cabang fitur/perbaikan (*branch*) baru dari `main` yang mutakhir.
2. Jaga *commit* Anda agar tetap berukuran kecil, terisolasi (*atomic*), dan logis.
3. Selalu sinkronkan dengan *upstream* sebelum mengirimkan PR untuk menghindari konflik yang kompleks.

## Konvensi Penamaan Branch

Gunakan konvensi penamaan yang jelas dan terstruktur saat membuat *branch* baru:

* `feat/nama-fitur` - untuk penambahan fitur baru (mis. `feat/student-portal`)
* `fix/nama-bug` - untuk perbaikan bug (mis. `fix/login-validation`)
* `refactor/nama-refactor` - untuk perubahan kode yang tidak memperbaiki bug atau menambah fitur
* `docs/pembaruan-dokumentasi` - untuk perubahan atau penambahan dokumentasi
* `chore/nama-tugas` - untuk tugas pemeliharaan, konfigurasi *build*, ci/cd, dll.

## Konvensi Pesan Commit (Conventional Commits)

Kami mewajibkan penulisan pesan *commit* sesuai spesifikasi **[Conventional Commits](https://www.conventionalcommits.org/)**. Hal ini krusial untuk otomasi *changelog*, *semantic versioning*, dan mempermudah penelusuran sejarah *commit*.

**Format:**
```
<tipe>[scope opsional]: <deskripsi pendek (imperatif)>

[body opsional untuk penjelasan lebih rinci]

[footer opsional untuk referensi issue (mis. Closes #123)]
```

**Tipe yang diizinkan:**
* `feat`: Fitur baru
* `fix`: Perbaikan *bug*
* `docs`: Pembaruan dokumentasi
* `style`: Pemformatan, spasi, titik koma; tidak mengubah logika program
* `refactor`: Mengubah struktur atau arsitektur kode (tanpa mengubah fungsionalitas)
* `perf`: Peningkatan performa dan optimisasi
* `test`: Penambahan atau perbaikan unit test/e2e test
* `chore`: Pemeliharaan, *tooling*, atau pembaruan *dependency*

**Contoh yang Baik:**
- `feat(auth): implement JWT token rotation`
- `fix(ui): resolve button alignment issue on mobile screens`

## Proses Pull Request (PR)

Setiap kontribusi harus melalui proses *Code Review* yang komprehensif.

1. Pastikan Anda telah melakukan *pull* dari cabang utama terbaru untuk meminimalisasi konflik.
2. Buat *Pull Request* (PR) mengarah ke cabang utama (`main`).
3. **Deskripsi Mendalam:** Tuliskan deskripsi PR dengan jelas. Apa masalahnya? Bagaimana solusinya? Apakah ada *breaking changes*?
4. **Continuous Integration (CI):** Pastikan semua alur kerja CI (*linter*, unit *tests*, *build checks*) berjalan sukses. PR dengan CI yang gagal tidak akan ditinjau.
5. **Code Review:** PR Anda wajib ditinjau setidaknya oleh **satu (1)** orang *Maintainer* senior sebelum dapat disetujui (*Approve*) dan digabungkan (*Merge*).

## Standar Kode & Pengujian

Sebagai bagian dari komitmen kami terhadap *engineering excellence*:
* Patuhi standar format kode yang disepakati bersama.
* Tulis kode yang deskriptif, terbaca (*readable*), dan fungsional. Terapkan prinsip DRY (*Don't Repeat Yourself*) dan SOLID bila relevan.
* Setiap PR yang memperkenalkan fitur krusial sangat dianjurkan untuk disertai dengan dokumentasi yang memadai, baik melalui *docstring* maupun pembaruan README.

Dengan mengikuti panduan komprehensif ini, Anda membantu kami memastikan basis kode **SENTRA** tetap tangguh, tangkas, dan menjadi referensi standar di industri. Terima kasih atas dedikasi Anda!
