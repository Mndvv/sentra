async function loadProgramKerja() {
    const container = document.getElementById('proker-list');
    if (!container) return;

    const programList = await fetchProgramKerja();

    if (!programList || programList.length === 0) {
        container.innerHTML = '';
        return;
    }

    container.innerHTML = programList.map(prog => {
        let statusClass = 'status-plan';
        let statusText = 'Direncanakan';
        if (prog.status === 'Berjalan') {
            statusClass = 'status-ongoing';
            statusText = 'Berjalan';
        } else if (prog.status === 'Selesai') {
            statusClass = 'status-done';
            statusText = 'Selesai';
        }

        return `
            <div class="proker-item">
                <div class="proker-info">
                    <h3 style="margin-bottom: 0.5rem;">${prog.nama}</h3>
                    <p style="color: var(--text-muted); font-size: 0.9rem; max-width: 500px;">
                        ${prog.deskripsi}
                    </p>
                    <div style="margin-top: 1rem; font-weight: 600; font-size: 0.85rem;">
                        ${prog.waktu ? prog.waktu : ''}
                    </div>
                </div>
                <span class="status-badge ${statusClass}">${statusText}</span>
            </div>
        `;
    }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    loadProgramKerja();
});
