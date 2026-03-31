const BASE_URL = "http://localhost:5000/api";
const UPLOADS_URL = "http://localhost:5000/uploads";

// Fetch Pengurus
async function fetchPengurus() {
    try {
        const res = await fetch(`${BASE_URL}/pengurus`);
        if (!res.ok) throw new Error("Gagal mengambil data pengurus");
        return await res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

// Fetch Seksi Bidang
async function fetchSekbid() {
    try {
        const res = await fetch(`${BASE_URL}/sekbid`);
        if (!res.ok) throw new Error("Gagal mengambil data sekbid");
        return await res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

// Fetch Program Kerja
async function fetchProgramKerja() {
    try {
        const res = await fetch(`${BASE_URL}/program-kerja`);
        if (!res.ok) throw new Error("Gagal mengambil data program kerja");
        return await res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

// Fetch Agenda
async function fetchAgenda() {
    try {
        const res = await fetch(`${BASE_URL}/agenda`);
        if (!res.ok) throw new Error("Gagal mengambil data agenda");
        return await res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

// Fetch Dokumentasi
async function fetchDokumentasi() {
    try {
        const res = await fetch(`${BASE_URL}/dokumentasi`);
        if (!res.ok) throw new Error("Gagal mengambil data dokumentasi");
        return await res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

// Post Kotak Saran
async function submitKotakSaran(data) {
    try {
        const res = await fetch(`${BASE_URL}/kotak-saran`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error("Gagal mengirim aspirasi");
        return await res.json();
    } catch (error) {
        console.error(error);
        return { success: false, message: error.message };
    }
}

// Utility untuk convert path dari backend jika butuh
function getImageUrl(path) {
    if (!path) return 'assets/default-placeholder.webp'; // Fallback
    if (path.startsWith('http') || path.startsWith('assets/')) return path;
    
    // Asumsi path di DB adalah nama file atau relatif misal "pengurus/cece.webp"
    // Menjadikan http://localhost:5000/uploads/pengurus/cece.webp
    // Mari normalize slash-nya dulu
    let normalized = path.replace(/^\//, '');
    if (normalized.startsWith('uploads/')) {
        normalized = normalized.replace('uploads/', '');
    }
    return `${UPLOADS_URL}/${normalized}`;
}
