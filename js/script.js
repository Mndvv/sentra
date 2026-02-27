// --- DATA SOURCE ---
const dataAgenda = [
    { judul: "Rantang Kanyaah", tanggal: "04 Maret 2026", ket: "Menyebar kebaikan di bulan penuh berkah." }
];

let playlist = [];
let currentTrackIndex = 0;

// --- UTILITY: Penjaga agar tidak error jika elemen tidak ada ---
const safeExecute = (id, callback) => {
    const el = document.getElementById(id);
    if (el) callback(el);
};

// --- DARK MODE PERSISTENCE ---
function initDarkMode() {
    const btnToggle = document.getElementById('dark-mode-toggle');
    const savedTheme = localStorage.getItem('theme');
    
    // Cek apakah ada theme tersimpan
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        if (btnToggle) {
            btnToggle.innerHTML = '<span class="material-symbols-outlined" style="color:white;">sunny</span>';
        }
    } else {
        document.body.classList.remove('dark-theme');
        if (btnToggle) {
            btnToggle.innerHTML = '<span class="material-symbols-outlined">dark_mode</span>';
        }
    }
    
    // Tambahkan event listener untuk toggle
    btnToggle?.addEventListener('click', toggleDarkMode);
}

function toggleDarkMode() {
    const btnToggle = document.getElementById('dark-mode-toggle');
    const isDark = document.body.classList.toggle('dark-theme');
    
    // Simpan preferensi ke localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Update icon
    if (btnToggle) {
        btnToggle.innerHTML = isDark 
            ? '<span class="material-symbols-outlined" style="color:white;">sunny</span>'
            : '<span class="material-symbols-outlined">dark_mode</span>';
    }
    
    // Trigger event untuk komponen lain yang perlu tahu perubahan theme
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { isDark } }));
}

// --- MUSIC PLAYER PERSISTENCE ---
const audioPlayer = document.getElementById('audio-player');
const trackTitle = document.querySelector('.track-name');
let isPlayerInitialized = false;

function loadTrack(index) {
    const track = playlist[index];
    if (audioPlayer && trackTitle && track) {
        audioPlayer.src = track.url;
        trackTitle.innerText = track.title;
    }
}

function playMusic() { 
    audioPlayer?.play();
    localStorage.setItem('playerState', 'playing');
    updatePlayButtonIcon('pause');
}

function pauseMusic() { 
    audioPlayer?.pause();
    localStorage.setItem('playerState', 'paused');
    updatePlayButtonIcon('play_arrow');
}

function updatePlayButtonIcon(iconName) {
    const btnPlayPause = document.getElementById('btn-play-pause');
    if (btnPlayPause) {
        btnPlayPause.innerHTML = `<span class="material-symbols-outlined">${iconName}</span>`;
    }
}

function playPauseMusic() {
    if (!audioPlayer) return;
    
    if (audioPlayer.paused) {
        playMusic();
    } else {
        pauseMusic();
    }
}

function nextMusic() {
    if (playlist.length === 0) return;
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
    playMusic();
    
    // Simpan track yang sedang diputar
    localStorage.setItem('currentTrack', currentTrackIndex);
}

// Fungsi untuk memulihkan state player
async function restorePlayerState() {
    if (!audioPlayer) return;
    
    try {
        // Load playlist dulu
        const response = await fetch('assets/radio/tracks.json');
        const tracks = await response.json();
        playlist = tracks.map(filename => ({
            title: `Radio Nawasena - ${filename.replace(/\.[^/.]+$/, "")}`,
            url: `assets/radio/${filename}`
        }));
        
        if (playlist.length === 0) return;
        
        // Pulihkan track terakhir
        const savedTrack = localStorage.getItem('currentTrack');
        currentTrackIndex = savedTrack ? parseInt(savedTrack) : 0;
        if (currentTrackIndex >= playlist.length) currentTrackIndex = 0;
        
        loadTrack(currentTrackIndex);
        
        // Pulihkan status play/pause
        const playerState = localStorage.getItem('playerState');
        if (playerState === 'playing') {
            // Coba play otomatis (mungkin diblokir browser)
            audioPlayer.play().catch(() => {
                // Jika autoplay diblokir, set ke pause
                localStorage.setItem('playerState', 'paused');
                updatePlayButtonIcon('play_arrow');
            });
        } else {
            updatePlayButtonIcon('play_arrow');
        }
        
        // Pulihkan waktu putar
        const savedTime = localStorage.getItem('currentTime');
        if (savedTime) {
            audioPlayer.currentTime = parseFloat(savedTime);
        }
        
        isPlayerInitialized = true;
    } catch (error) {
        console.log('Gagal memuat playlist:', error);
    }
}

// Simpan progres waktu putar setiap 5 detik
function savePlayerProgress() {
    if (audioPlayer && !audioPlayer.paused) {
        localStorage.setItem('currentTime', audioPlayer.currentTime);
    }
}

// --- FUNCTIONS ---
function tampilkanAgenda() {
    safeExecute('agenda-list', (container) => {
        container.innerHTML = dataAgenda.map(item => `
            <div class="agenda-card">
                <small style="color: var(--accent); font-weight: 600;">${item.tanggal}</small>
                <h3>${item.judul}</h3>
                <p>${item.ket}</p>
            </div>
        `).join('');
    });
}

function tampilkanSekbid() {
    safeExecute('sekbid-list', (container) => {
        const listSekbid = [
            "Keimanan dan Ketaqwaan Terhadap Tuhan Yang Maha Esa",
            "Budi Pekerti atau Akhlak Mulia",
            "Kepribadian Unggul, Wawasan Kebangsaan dan Bela Negara",
            "Prestasi Akademik, Seni, dan atau Olahraga Sesuai Minat dan Bakat",
            "Demokrasi, Hak Asasi Manusia, Pendidikan Politik, Lingkungan Hidup, Kepekaan dan Toleransi Sosial Dalam Konteks Masyarakat Plural",
            "Kreativitas, Keterampilan dan Kewirausahaan",
            "Kualitas Jasmani, Kesehatan, dan Gizi Berbasis Sumber Gizi Yang Terdiversifikasi",
            "Sastra dan Budaya",
            "Teknologi, Informasi, dan Komunikasi",
            "Komunikasi Dalam Bahasa Inggris"
        ];
        container.innerHTML = listSekbid.map((nama, i) => `
            <div class="sekbid-card">
                <span class="sekbid-num">${i + 1}</span>
                <h4>SEKBID ${i + 1}</h4>
                <p>${nama}</p>
            </div>
        `).join('');
    });
}

// --- HAMBURGER MENU ---
function initHamburger() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    
    hamburger?.addEventListener('click', () => {
        navLinks?.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });
    
    // Tutup menu saat klik di luar
    document.addEventListener('click', (e) => {
        if (!hamburger?.contains(e.target) && !navLinks?.contains(e.target)) {
            navLinks?.classList.remove('active');
            hamburger?.classList.remove('toggle');
        }
    });
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Inisialisasi semua komponen
    initDarkMode();
    initHamburger();
    tampilkanAgenda();
    tampilkanSekbid();
    restorePlayerState();
    
    // Simpan progres waktu putar setiap 5 detik
    setInterval(savePlayerProgress, 5000);
    
    // Simpan track saat ganti lagu
    audioPlayer?.addEventListener('ended', nextMusic);
    
    // Simpan currentTrack saat lagu berganti
    audioPlayer?.addEventListener('play', () => {
        localStorage.setItem('currentTrack', currentTrackIndex);
    });
});

// Simpan state sebelum halaman di-unload
window.addEventListener('beforeunload', () => {
    if (audioPlayer) {
        localStorage.setItem('currentTime', audioPlayer.currentTime);
        localStorage.setItem('playerState', audioPlayer.paused ? 'paused' : 'playing');
        localStorage.setItem('currentTrack', currentTrackIndex);
    }
});