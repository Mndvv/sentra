/* ════════════════════════════════════════════════
   ROUTER.JS — Client-Side SPA Router
   OSIS Nawasena 2025/2026
   Hash-based routing: /#/page
════════════════════════════════════════════════ */

// ── PAGE TEMPLATES ──────────────────────────────

const templates = {

    beranda: () => `
        <header id="beranda" class="hero">
            <div class="hero-content">
                <span class="badge">NAWASENA 2025/2026</span>
                <h1>Membangun Masa Depan <span>Cerah</span> Bersama.</h1>
                <p>Wadah aspirasi dan inovasi siswa untuk menciptakan perubahan positif di lingkungan sekolah.</p>
                <div class="hero-btns">
                    <a href="#nawasena-section" class="btn-primary" id="filosofi-btn">Filosofi Kami</a>
                </div>
            </div>
        </header>
        <main class="container">
            <section id="nawasena-section" class="section-padding">
                <div class="section-header">
                    <h2>Filosofi</h2>
                    <p>Mengenal makna dibalik nama Nawasena.</p>
                </div>
                <div class="glass-card">
                    <p><strong>Nawasena</strong> berasal dari bahasa Sanskerta yang berarti <em>"Masa Depan yang Cerah"</em>. Kami tidak hanya sekadar organisasi, tapi sebuah penggerak untuk membawa harapan baru.</p>
                </div>
            </section>
            <section id="agenda" class="section-padding">
                <div class="section-header">
                    <h2>Agenda Mendatang</h2>
                </div>
                <div id="agenda-list" class="modern-grid"></div>
            </section>
        </main>
    `,

    struktur: () => `
        <main class="container section-padding" style="margin-top:5rem;">
            <div class="section-header" style="text-align:center;">
                <h2>Struktur Organisasi</h2>
                <p>Kabinet Nawasena 2025/2026</p>
            </div>
            <div class="bento-grid" id="pengurus-inti-container"></div>
            <div class="sekbid-container">
                <h3 class="subsection-title">Seksi Bidang</h3>
                <div class="sekbid-grid" id="sekbid-list"></div>
            </div>
        </main>

        <!-- Modal Pengurus -->
        <div id="pengurusModal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 id="modalTitle">Detail Pengurus</h2>
                    <button class="close-modal" onclick="closePengurusModal()">&times;</button>
                </div>
                <div class="modal-body" id="pengurusModalBody"></div>
            </div>
        </div>

        <!-- Modal Sekbid -->
        <div id="sekbidModal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 id="sekbidModalTitle">Detail Seksi Bidang</h2>
                    <button class="close-modal" onclick="closeSekbidModal()">&times;</button>
                </div>
                <div class="modal-body" id="sekbidModalBody"></div>
            </div>
        </div>
    `,

    program: () => `
        <main class="container section-padding" style="margin-top:5rem;">
            <div class="section-header">
                <h2>Detail Program Kerja</h2>
                <p>Daftar inisiatif dan target pencapaian OSIS periode 2025/2026.</p>
            </div>
            <div class="proker-list" id="proker-list"></div>
        </main>
    `,

    dokumentasi: () => `
        <main class="container section-padding" style="margin-top:5rem;">
            <div class="section-header">
                <h2>Dokumentasi Kegiatan</h2>
                <p>Jejak langkah dan momen berharga dalam setiap program kerja kami.</p>
            </div>
            <div class="modern-grid" id="gallery-container"></div>
        </main>

        <!-- Gallery Modal -->
        <div id="galleryModal" class="gallery-modal">
            <div class="gallery-modal-content">
                <div class="gallery-header">
                    <div>
                        <h2 id="modalEventTitle">Loading...</h2>
                        <p id="modalEventDate">Loading...</p>
                    </div>
                    <button class="close-gallery" onclick="closeGallery()">&times;</button>
                </div>
                <div class="gallery-main">
                    <button class="nav-btn prev" onclick="prevImage()">
                        <span class="material-symbols-outlined">chevron_left</span>
                    </button>
                    <div class="main-image-container">
                        <img id="mainImage" class="main-image" src="" alt="Gallery Image">
                        <div id="imageCaption" class="image-caption"></div>
                        <div id="imageCounter" class="image-counter"></div>
                    </div>
                    <button class="nav-btn next" onclick="nextImage()">
                        <span class="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
                <div class="gallery-thumbnails" id="thumbnailContainer">
                    <div class="thumbnail-container" id="thumbnailList"></div>
                </div>
            </div>
        </div>
    `,

    aurora: () => `
        <main class="container section-padding" style="margin-top:5rem;">
            <div class="section-header" style="text-align:center;">
                <h2>Suara Siswa</h2>
                <p>Setiap ide kecil bisa jadi perubahan besar.</p>
            </div>
            <div class="glass-card" style="max-width:600px; margin:0 auto;">
                <form id="aurora-form">
                    <div id="alert-container" style="margin-bottom:1rem;"></div>
                    <div style="margin-bottom:1.5rem;">
                        <label>Nama (opsional)</label>
                        <input type="text" name="name" placeholder="Anonim juga boleh"
                            style="width:100%; padding:12px; border:1px solid var(--border-color); border-radius:8px; background:rgba(255,255,255,0.05); color:var(--text-color); margin-top:0.5rem; font-family:inherit;">
                    </div>
                    <div style="margin-bottom:1.5rem;">
                        <label>Email (opsional)</label>
                        <input type="email" name="email" placeholder="nama@email.com untuk respon balik"
                            style="width:100%; padding:12px; border:1px solid var(--border-color); border-radius:8px; background:rgba(255,255,255,0.05); color:var(--text-color); margin-top:0.5rem; font-family:inherit;">
                    </div>
                    <div style="margin-bottom:1.5rem;">
                        <label>Kategori</label>
                        <select name="kategori" style="width:100%; padding:12px; border-radius:8px; border:1px solid var(--border-color); background:var(--bg-card); color:var(--text-color);">
                            <option>Fasilitas Sekolah</option>
                            <option>Kegiatan &amp; Event</option>
                            <option>Ekstrakurikuler</option>
                            <option>Lainnya</option>
                        </select>
                    </div>
                    <div style="margin-bottom:1.5rem;">
                        <label>Aspirasi</label>
                        <textarea name="message" rows="5" required placeholder="Tulis aspirasimu di sini..."
                            style="width:100%; padding:12px; border-radius:8px; border:1px solid var(--border-color); background:rgba(255,255,255,0.05); color:var(--text-color); font-family:inherit; resize:vertical;"></textarea>
                    </div>
                    <button type="submit" class="btn-primary" style="width:100%;">Kirim Aspirasi</button>
                </form>
            </div>
        </main>
    `,

    sponsor: () => `
        <!-- HERO -->
        <div class="sp-hero">
            <div class="blob blob-1"></div>
            <div class="blob blob-2"></div>
            <div class="container sp-hero-inner">
                <span class="badge">SPONSORSHIP &amp; KERJASAMA</span>
                <h1>Bersama Kami,<br>Jadilah Bagian dari<br><span class="grad">Perubahan Nyata</span></h1>
                <p>Bergabunglah sebagai mitra strategis OSIS Nawasena SMAN 2 Jonggol dan berkontribusi langsung dalam membangun pengalaman berharga bagi ratusan siswa selama periode 2025/2026.</p>
                <div class="hero-actions">
                    <a href="#formulir" class="btn-primary-sp" id="sp-cta-form">
                        <span class="material-symbols-outlined" style="font-size:1.1rem;">handshake</span>
                        Ajukan Kerjasama
                    </a>
                    <a href="#paket" class="btn-outline-sp" id="sp-cta-paket">Lihat Paket Sponsorship</a>
                </div>
            </div>
        </div>

        <main class="container section-padding">
            <!-- STATS -->
            <div class="stats-row reveal">
                <div class="stat-card"><span class="stat-emoji">👥</span><div class="stat-num" data-target="800">0</div><p class="stat-label">Siswa Aktif di Sekolah</p></div>
                <div class="stat-card"><span class="stat-emoji">📅</span><div class="stat-num" data-target="12" data-suffix="+">0</div><p class="stat-label">Program Kerja per Tahun</p></div>
                <div class="stat-card"><span class="stat-emoji">🏆</span><div class="stat-num" data-target="3">0</div><p class="stat-label">Event Besar per Semester</p></div>
                <div class="stat-card"><span class="stat-emoji">🌐</span><div class="stat-num" data-target="100" data-suffix="%">0</div><p class="stat-label">Aktivitas Terdokumentasi Digital</p></div>
            </div>
            <div class="s-divider"></div>

            <!-- TIER -->
            <div id="paket" class="section-header reveal">
                <h2>Paket Sponsorship</h2>
                <p>Pilih tingkatan yang sesuai dengan kontribusi dan kebutuhan visibilitas Anda.</p>
            </div>
            <div class="tier-grid">
                <div class="tier-card t-bronze reveal rd-1">
                    <div class="tier-icon">🥉</div><p class="tier-label">Bronze</p><h3 class="tier-title">Pendukung</h3>
                    <p class="tier-sub">Ideal untuk bisnis lokal yang ingin dikenal oleh komunitas sekolah.</p>
                    <hr class="tier-hr">
                    <ul class="tier-perks">
                        <li><span class="perk-dot">✓</span>Mention di media sosial kami</li>
                        <li><span class="perk-dot">✓</span>Disebut dalam 1 event resmi</li>
                        <li><span class="perk-dot">✓</span>Sertifikat penghargaan digital</li>
                        <li><span class="perk-dot">✓</span>Ucapan terima kasih resmi</li>
                    </ul>
                    <a href="#formulir" class="tier-btn sp-anchor">Pilih Paket Ini</a>
                </div>
                <div class="tier-card t-silver reveal rd-2">
                    <div class="tier-icon">🥈</div><p class="tier-label">Silver</p><h3 class="tier-title">Mitra</h3>
                    <p class="tier-sub">Cocok untuk brand yang ingin membangun relevansi di kalangan pelajar.</p>
                    <hr class="tier-hr">
                    <ul class="tier-perks">
                        <li><span class="perk-dot">✓</span>Semua benefit Bronze</li>
                        <li><span class="perk-dot">✓</span>Logo di banner fisik event</li>
                        <li><span class="perk-dot">✓</span>Promosi di 3 event berbeda</li>
                        <li><span class="perk-dot">✓</span>Konten kolaborasi di medsos</li>
                        <li><span class="perk-dot">✓</span>Sertifikat penghargaan resmi</li>
                    </ul>
                    <a href="#formulir" class="tier-btn sp-anchor">Pilih Paket Ini</a>
                </div>
                <div class="tier-card t-gold is-featured reveal rd-3">
                    <div class="tier-ribbon">Terpopuler</div>
                    <div class="tier-icon">🥇</div><p class="tier-label">Gold</p><h3 class="tier-title">Mitra Utama</h3>
                    <p class="tier-sub">Paket unggulan untuk brand yang ingin ada di setiap momen terbesar kami.</p>
                    <hr class="tier-hr">
                    <ul class="tier-perks">
                        <li><span class="perk-dot">✓</span>Semua benefit Silver</li>
                        <li><span class="perk-dot">✓</span>Logo di semua media event</li>
                        <li><span class="perk-dot">✓</span>MC menyebut nama sponsor</li>
                        <li><span class="perk-dot">✓</span>Stand/booth di event utama</li>
                        <li><span class="perk-dot">✓</span>Laporan jangkauan &amp; dampak event</li>
                        <li><span class="perk-dot">✓</span>Plakat penghargaan fisik</li>
                    </ul>
                    <a href="#formulir" class="tier-btn sp-anchor">Pilih Paket Ini</a>
                </div>
                <div class="tier-card t-plat reveal rd-4">
                    <div class="tier-icon">💎</div><p class="tier-label">Platinum</p><h3 class="tier-title">Mitra Eksklusif</h3>
                    <p class="tier-sub">Kemitraan penuh untuk institusi yang menginginkan dampak maksimal sepanjang periode.</p>
                    <hr class="tier-hr">
                    <ul class="tier-perks">
                        <li><span class="perk-dot">✓</span>Semua benefit Gold</li>
                        <li><span class="perk-dot">✓</span>Hak nama event (naming right)</li>
                        <li><span class="perk-dot">✓</span>Branding eksklusif sepanjang periode</li>
                        <li><span class="perk-dot">✓</span>Akses talkshow langsung ke siswa</li>
                        <li><span class="perk-dot">✓</span>Program kerja kolaborasi khusus</li>
                        <li><span class="perk-dot">✓</span>Laporan dampak komprehensif</li>
                    </ul>
                    <a href="#formulir" class="tier-btn sp-anchor">Pilih Paket Ini</a>
                </div>
            </div>
            <div class="s-divider"></div>

            <!-- PARTNER TYPES -->
            <div class="section-header reveal">
                <h2>Tipe Kemitraan</h2>
                <p>Lebih dari sekadar sponsor — kami percaya pada kolaborasi yang saling menguntungkan dan bermakna.</p>
            </div>
            <div class="ptype-grid">
                <div class="ptype-card reveal rd-1"><span class="ptype-icon">🏢</span><h3>Mitra Bisnis &amp; UMKM</h3><p>Untuk perusahaan dan pelaku usaha yang ingin meningkatkan brand awareness di kalangan pelajar dan keluarganya.</p></div>
                <div class="ptype-card reveal rd-2"><span class="ptype-icon">🎓</span><h3>Mitra Kampus &amp; Institusi</h3><p>Untuk universitas dan lembaga pendidikan yang ingin menjangkau calon mahasiswa potensial.</p></div>
                <div class="ptype-card reveal rd-3"><span class="ptype-icon">🤝</span><h3>Mitra Alumni</h3><p>Untuk alumni yang ingin berkontribusi balik ke almamater.</p></div>
            </div>
            <div class="s-divider"></div>

            <!-- MARQUEE -->
            <div class="section-header reveal" style="text-align:center;">
                <h2>Mitra Kami</h2>
                <p>Terima kasih kepada seluruh pihak yang telah mendukung perjalanan Nawasena 2025/2026.</p>
            </div>
            <div class="marquee-wrap reveal">
                <div class="marquee-track" id="marqueeTrack">
                    <div class="partner-chip"><span class="chip-em">🍹</span> Jeruk Mood</div>
                    <div class="partner-chip"><span class="chip-em">🍣</span> Dimsum Hallo Dek</div>
                    <div class="partner-chip"><span class="chip-em">🍗</span> SempolCelup RJ</div>
                    <div class="partner-chip"><span class="chip-em">🏥</span> Klinik Sehat Bersama</div>
                    <div class="partner-chip"><span class="chip-em">🎨</span> Nyareat Konveksi</div>
                    <div class="partner-chip"><span class="chip-em">🍜</span> Warung Barokah</div>
                    <div class="partner-chip"><span class="chip-em">📷</span> Dyputu Studio</div>
                    <div class="partner-chip"><span class="chip-em">🌿</span> Green Living Co.</div>
                    <div class="partner-chip"><span class="chip-em">🎵</span> Audio Nada Studio</div>
                    <div class="partner-chip"><span class="chip-em">📦</span> Ekspedisi Kilat</div>
                </div>
            </div>
            <div class="s-divider"></div>

            <!-- CTA -->
            <div class="cta-strip reveal">
                <h2>Ada Pertanyaan? Hubungi Kami Langsung</h2>
                <p>Tim Sekretariat OSIS Nawasena siap mendiskusikan paket kerjasama yang paling sesuai dengan kebutuhan Anda.</p>
                <div class="contact-pills">
                    <a href="mailto:nawasena@sman2jonggol.sch.id" class="contact-pill"><span class="material-symbols-outlined" style="font-size:1rem;">mail</span> Email Kami</a>
                    <a href="https://wa.me/6289xxxxxxxxx" class="contact-pill" target="_blank"><span class="material-symbols-outlined" style="font-size:1rem;">chat</span> WhatsApp</a>
                    <a href="https://instagram.com/nawasena_sman2jonggol" class="contact-pill" target="_blank"><span class="material-symbols-outlined" style="font-size:1rem;">photo_camera</span> Instagram</a>
                </div>
            </div>

            <!-- FORM -->
            <div id="formulir" class="form-wrap reveal">
                <h2>Formulir Pengajuan Kerjasama</h2>
                <p>Isi formulir di bawah ini dan tim kami akan menghubungi Anda dalam 1–2 hari kerja.</p>
                <form id="sponsorForm">
                    <div class="f-grid">
                        <div class="f-field"><label>Nama / Nama Lembaga *</label><input type="text" name="nama" placeholder="Nama lengkap atau nama instansi" required></div>
                        <div class="f-field"><label>Kontak (WA / Email) *</label><input type="text" name="kontak" placeholder="0812xxxx atau nama@email.com" required></div>
                        <div class="f-field">
                            <label>Tipe Kerjasama *</label>
                            <select name="tipe" required>
                                <option value="" disabled selected>Pilih tipe kerjasama</option>
                                <optgroup label="Paket Sponsorship">
                                    <option>Sponsorship Bronze — Pendukung</option>
                                    <option>Sponsorship Silver — Mitra</option>
                                    <option>Sponsorship Gold — Mitra Utama</option>
                                    <option>Sponsorship Platinum — Mitra Eksklusif</option>
                                </optgroup>
                                <optgroup label="Tipe Kemitraan">
                                    <option>Mitra Bisnis &amp; UMKM</option>
                                    <option>Mitra Kampus &amp; Institusi</option>
                                    <option>Mitra Alumni</option>
                                </optgroup>
                                <option>Kerjasama Lainnya</option>
                            </select>
                        </div>
                        <div class="f-field">
                            <label>Program / Event yang Diminati</label>
                            <select name="event">
                                <option value="" disabled selected>Pilih (opsional)</option>
                                <option>Semua Program Kerja</option>
                                <option>EPOK — Event Seni &amp; Olahraga</option>
                                <option>Seminar &amp; Forum Edukasi</option>
                                <option>Program Sosial &amp; Kemasyarakatan</option>
                                <option>Event Peringatan Hari Besar</option>
                                <option>Lainnya</option>
                            </select>
                        </div>
                        <div class="f-field f-full"><label>Pesan &amp; Proposal Singkat *</label><textarea name="pesan" placeholder="Ceritakan tentang lembaga / bisnis Anda, tujuan kerjasama, dan ekspektasi yang ingin dicapai..." required></textarea></div>
                    </div>
                    <button type="submit" class="f-submit">
                        <span class="material-symbols-outlined" style="font-size:1.1rem;">send</span>
                        Kirim Pengajuan
                    </button>
                </form>
            </div>
        </main>

        <!-- TOAST -->
        <div class="sp-toast" id="spToast">
            <span class="material-symbols-outlined" style="font-size:1.2rem; color:#4ade80;">check_circle</span>
            Pengajuan berhasil terkirim! Kami akan segera menghubungi Anda.
        </div>
    `,
};

// ── PAGE TITLES ──────────────────────────────────
const pageTitles = {
    beranda: 'Beranda — OSIS Nawasena SENTRA',
    struktur: 'Struktur Organisasi — OSIS Nawasena',
    program: 'Program Kerja — OSIS Nawasena',
    dokumentasi: 'Dokumentasi — OSIS Nawasena',
    aurora: 'AURORA — Kotak Aspirasi OSIS',
    sponsor: 'Sponsorship & Kerjasama — OSIS Nawasena',
};

// ── PAGE INITIALIZERS ────────────────────────────
const pageInits = {
    beranda() { tampilkanAgenda(); initSmoothScroll(); },
    struktur() { loadPengurus(); loadSekbid(); },
    program() { loadProgramKerja(); },
    dokumentasi() { loadGalleryData(); },
    aurora() { initAurora(); },
    sponsor() { initSponsor(); },
};

// ── NAV ACTIVE STATE ─────────────────────────────
function setActiveNav(page) {
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.remove('active');
        if (a.dataset.page === page) a.classList.add('active');
    });
}

// ── ROUTER CORE ──────────────────────────────────
function getRoutePage() {
    const hash = window.location.hash; // e.g. "#/struktur"
    if (!hash || hash === '#' || hash === '#/') return 'beranda';
    const page = hash.replace('#/', '').split('/')[0];
    return templates[page] ? page : 'beranda';
}

function navigate(page) {
    const appRoot = document.getElementById('app-root');
    if (!appRoot) return;

    // Fade out (opacity only — no transform, to keep position:fixed children centered)
    appRoot.style.opacity = '0';

    setTimeout(() => {
        appRoot.innerHTML = templates[page]();
        document.title = pageTitles[page] || pageTitles.beranda;
        setActiveNav(page);
        window.scrollTo({ top: 0, behavior: 'instant' });

        // Fade in
        appRoot.style.opacity = '1';

        // Run page-specific init
        if (pageInits[page]) pageInits[page]();
    }, 120);
}

// ── SMOOTH IN-PAGE SCROLL (for href="#section") ──
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]:not([data-page])').forEach(a => {
        a.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').replace('#', '');
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ── BOOTSTRAP ────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Apply CSS transition to app-root — opacity ONLY (no transform!)
    // transform on a parent breaks position:fixed centering of child modals
    const appRoot = document.getElementById('app-root');
    if (appRoot) {
        appRoot.style.transition = 'opacity 0.12s ease';
    }

    // Initial route
    navigate(getRoutePage());

    // Listen for hash changes (back/forward, nav clicks)
    window.addEventListener('hashchange', () => {
        navigate(getRoutePage());
    });
});
