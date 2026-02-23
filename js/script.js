// --- DATA SOURCE ---
const dataAgenda = [
    { judul: "Rapat Pleno Bulanan", tanggal: "5 Jan 2026", ket: "Pembahasan program kerja semester genap." },
    { judul: "Classmeet Koordinasi", tanggal: "12 Jan 2026", ket: "Pembentukan panitia dan teknis lomba." }
];

let playlist = [];
let currentTrackIndex = 0;

// --- UTILITY: Penjaga agar tidak error jika elemen tidak ada ---
const safeExecute = (id, callback) => {
    const el = document.getElementById(id);
    if (el) callback(el);
};

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
            "Kepripadian Unggul, Wawasan Kebangsaan dan Bela Negara",
            "Prestasi Akademik, Seni, dan atau Olahraga Sesuai Minat dan Bakat",
            "Demokrasi, Hak Asasi Manusia, Pendidikan Politik, Lingkungan Hidup, Kepekaan dan Toleransi Sosial Dalam Konteks Masyarakat Plural",
            "Kreastivitas, Keterampilan dan Kewirausahaan",
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

// --- MUSIC PLAYER ---
const audioPlayer = document.getElementById('audio-player');
const trackTitle = document.querySelector('.track-name');

function loadTrack(index) {
    const track = playlist[index];
    if (audioPlayer && trackTitle && track) {
        audioPlayer.src = track.url;
        trackTitle.innerText = track.title;
    }
}

function playMusic() { audioPlayer?.play(); }
function pauseMusic() { audioPlayer?.pause(); }
function playPauseMusic() {
    const btnPlayPause = document.getElementById('btn-play-pause');
    if (audioPlayer?.paused) {
        playMusic();
        btnPlayPause.innerHTML = '<span class="material-symbols-outlined">pause</span>';
    } else {
        pauseMusic();
        btnPlayPause.innerHTML = '<span class="material-symbols-outlined">play_arrow</span>';
    }
}

function nextMusic() {
    if (playlist.length === 0) return;
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
    playMusic();
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    tampilkanAgenda();
    tampilkanSekbid();

    // Fetch track list from assets/radio/tracks.json
    fetch('assets/radio/tracks.json')
        .then(res => res.json())
        .then(tracks => {
            playlist = tracks.map(filename => ({
                title: `Radio Nawasena - ${filename.replace(/\.[^/.]+$/, "")}`,
                url: `assets/radio/${filename}`
            }));
            if (playlist.length > 0) {
                currentTrackIndex = 0;
                loadTrack(currentTrackIndex);
            }
        });

    // Dark Mode
    const btnToggle = document.getElementById('dark-mode-toggle');
    btnToggle?.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        btnToggle.innerHTML = document.body.classList.contains('dark-theme')
            ? '<span class="material-symbols-outlined light" style="color:white;">sunny</span>'
            : '<span class="material-symbols-outlined dark">dark_mode</span>';
    });

    // Hamburger
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    hamburger?.addEventListener('click', () => {
        navLinks?.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });
});


