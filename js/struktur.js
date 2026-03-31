// Variabel global untuk menampung data
let globalPengurusData = [];
let globalSekbidData = [];

// Fungsi untuk me-load dan menampilkan semua Pengurus Inti
async function loadPengurus() {
    const container = document.getElementById('pengurus-inti-container');
    if (!container) return;

    // Ambil dari backend lewat api.js
    const pengurusList = await fetchPengurus();
    globalPengurusData = pengurusList;

    if (!pengurusList || pengurusList.length === 0) {
        container.innerHTML = '<p style="text-align:center; color: var(--text-muted); width: 100%;">Belum ada data Pengurus.</p>';
        return;
    }

    container.innerHTML = pengurusList.map((p, i) => {
        // Ketua Umum diberi kelas featured, lainnya standar
        const isKetua = p.jabatan && p.jabatan.toLowerCase().includes('ketua umum');
        const featuredClass = isKetua ? 'featured' : '';
        const imgUrl = getImageUrl(p.foto);
        const mottoHtml = p.motto ? `<p>"${p.motto}"</p>` : '';
        
        return `
            <div class="bento-item ${featuredClass}" onclick="showPengurusDetail('${p.id}')">
                <div class="member-photo"><img src="${imgUrl}" alt="${p.nama}"></div>
                <div class="member-info">
                    <span class="role-badge">${p.jabatan}</span>
                    <h3>${p.nama}</h3>
                    ${isKetua ? mottoHtml : ''}
                </div>
            </div>
        `;
    }).join('');
}

// Fungsi Load Sekbid
async function loadSekbid() {
    const container = document.getElementById('sekbid-list');
    if (!container) return;

    const sekbidList = await fetchSekbid();
    globalSekbidData = sekbidList;

    if (!sekbidList || sekbidList.length === 0) {
        container.innerHTML = '<p style="text-align:center; color: var(--text-muted); width: 100%;">Belum ada data Seksi Bidang.</p>';
        return;
    }

    container.innerHTML = sekbidList.map(sekbid => `
        <div class="sekbid-card" onclick="showSekbidDetail(${sekbid.number})">
            <span class="sekbid-num">${sekbid.number}</span>
            <h4>SEKBID ${sekbid.number}</h4>
            <p>${sekbid.name}</p>
        </div>
    `).join('');
}

// Menampilkan Detail Pengurus
function showPengurusDetail(id) {
    // Cari data pengurus dari array global
    const data = globalPengurusData.find(p => p.id === id);
    if (!data) return;

    const modal = document.getElementById('pengurusModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('pengurusModalBody');

    modalTitle.textContent = data.jabatan || 'Detail Pengurus';
    
    const imgUrl = getImageUrl(data.foto);

    // Biodata items
    const biodataItems = `
        <div class="biodata-item">
            <span class="biodata-label">Nama Lengkap</span>
            <span class="biodata-value">${data.nama || '-'}</span>
        </div>
        <div class="biodata-item">
            <span class="biodata-label">Kelas</span>
            <span class="biodata-value">${data.kelas || '-'}</span>
        </div>
        <div class="biodata-item">
            <span class="biodata-label">Tempat/Tanggal Lahir</span>
            <span class="biodata-value">${data.tempatLahir || '-'}, ${data.tanggalLahir || '-'}</span>
        </div>
        <div class="biodata-item">
            <span class="biodata-label">Alamat</span>
            <span class="biodata-value">${data.alamat || '-'}</span>
        </div>
        <div class="biodata-item">
            <span class="biodata-label">Hobi</span>
            <span class="biodata-value">${data.hobi || '-'}</span>
        </div>
        <div class="biodata-item">
            <span class="biodata-label">Motto</span>
            <span class="biodata-value">"${data.motto || '-'}"</span>
        </div>
    `;

    // Program kerja items
    let programItems = '<p style="color:var(--text-muted);">Belum ada program kerja direkam.</p>';
    if (data.programKerja && Array.isArray(data.programKerja) && data.programKerja.length > 0) {
        programItems = data.programKerja.map(prog => `
            <div class="program-card">
                <h5>${prog.nama || '-'}</h5>
                <div class="program-desc">${prog.deskripsi || '-'}</div>
                <div class="program-meta">
                    <span>Target: ${prog.target || '-'}</span>
                    <span class="program-status status-${prog.status === 'Berjalan' ? 'ongoing' : (prog.status === 'Selesai' ? 'done' : 'plan')}">
                        ${prog.status || '-'}
                    </span>
                </div>
            </div>
        `).join('');
    }

    // Visi Misi if exists (biasanya untuk ketua namun bisa fleksibel)
    let visiMisiSection = '';
    if (data.visi || (data.misi && Array.isArray(data.misi) && data.misi.length > 0)) {
        let misiHtml = '';
        if (data.misi && Array.isArray(data.misi)) {
            misiHtml = data.misi.map(m => `<li>${m}</li>`).join('');
        }
        
        visiMisiSection = `
            <div class="visi-misi-section">
                <h4>🎯 Visi & Misi</h4>
                <div class="visi-item">
                    <strong>Visi:</strong>
                    <p>${data.visi || '-'}</p>
                </div>
                <div class="misi-item">
                    <strong>Misi:</strong>
                    <ul class="misi-list">
                        ${misiHtml}
                    </ul>
                </div>
            </div>
        `;
    }

    modalBody.innerHTML = `
        <div class="profile-header">
            <img src="${imgUrl}" alt="${data.nama}" class="profile-avatar">
            <div class="profile-info">
                <h3>${data.nama || '-'}</h3>
                <span class="profile-role">${data.jabatan || '-'}</span>
                <div class="profile-detail">
                    <span class="detail-item"><strong>Kelas:</strong> ${data.kelas || '-'}</span>
                    <span class="detail-item"><strong>Hobi:</strong> ${data.hobi || '-'}</span>
                </div>
            </div>
        </div>

        <div class="biodata-section">
            <h4>📋 Biodata Lengkap</h4>
            <div class="biodata-grid">
                ${biodataItems}
            </div>
        </div>

        ${visiMisiSection}

        <div class="program-section">
            <h4>📋 Program Kerja</h4>
            <div class="program-list">
                ${programItems}
            </div>
        </div>
    `;

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function showSekbidDetail(sekbidNumber) {
    const sekbid = globalSekbidData.find(s => s.number === sekbidNumber);
    if (!sekbid) return;

    const modal = document.getElementById('sekbidModal');
    const modalTitle = document.getElementById('sekbidModalTitle');
    const modalBody = document.getElementById('sekbidModalBody');

    modalTitle.textContent = `SEKBID ${sekbid.number}`;

    let memberItems = '<li>Belum ada anggota</li>';
    if(sekbid.members && sekbid.members.length > 0) {
        memberItems = sekbid.members.map(member => `
            <li>
                <span class="member-icon">${member.name.charAt(0).toUpperCase()}</span>
                <span>${member.name} ${member.role ? `(${member.role})` : ''}</span>
            </li>
        `).join('');
    }

    let programItems = '<p style="color:var(--text-muted);">Belum ada program kerja direkam.</p>';
    if (sekbid.programs && sekbid.programs.length > 0) {
        programItems = sekbid.programs.map(program => `
            <div class="program-item">
                <h4>${program.name} 
                    <span class="program-status ${program.status === 'Berjalan' ? 'status-ongoing' : 'status-plan'}">
                        ${program.status || '-'}
                    </span>
                </h4>
                <p>${program.description}</p>
            </div>
        `).join('');
    }

    modalBody.innerHTML = `
        <div class="sekbid-detail">
            <h3>Deskripsi Bidang</h3>
            <p style="margin-bottom: 1.5rem; padding: 1rem; background: var(--bg-primary); border-radius: 12px;">
                ${sekbid.name}
            </p>
        </div>
        
        <div class="sekbid-detail">
            <h3>Anggota</h3>
            <ul class="member-list">
                ${memberItems}
            </ul>
        </div>
        
        <div class="sekbid-detail">
            <h3>Program Kerja</h3>
            <div class="program-list" style="display:flex; flex-direction:column; gap:10px;">
                ${programItems}
            </div>
        </div>
    `;

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closePengurusModal() {
    const modal = document.getElementById('pengurusModal');
    if (modal) modal.classList.remove('show');
    document.body.style.overflow = '';
}

function closeSekbidModal() {
    const modal = document.getElementById('sekbidModal');
    if (modal) modal.classList.remove('show');
    document.body.style.overflow = '';
}

// Window Modals listener
window.onclick = function(event) {
    const pengurusModal = document.getElementById('pengurusModal');
    const sekbidModal = document.getElementById('sekbidModal');
    
    if (event.target === pengurusModal) {
        closePengurusModal();
    }
    if (event.target === sekbidModal) {
        closeSekbidModal();
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePengurusModal();
        closeSekbidModal();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    loadPengurus();
    loadSekbid();
});
