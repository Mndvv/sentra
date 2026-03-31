document.addEventListener('DOMContentLoaded', () => {
    const auroraForm = document.getElementById('aurora-form');
    if (!auroraForm) return;

    auroraForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const alertContainer = document.getElementById('alert-container');
        alertContainer.innerHTML = ''; // Clear previous messages
        
        // Disable submit button styling
        const submitBtn = auroraForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Mengirim...';

        const formData = new FormData(auroraForm);
        const nameVal = formData.get('name') || "Anonim";
        const emailVal = formData.get('email') || ""; 
        const kategoriVal = formData.get('kategori');
        let messageVal = formData.get('message');
        
        const payload = {
            nama: nameVal,
            email: emailVal !== "" ? emailVal : undefined,
            kategori: kategoriVal !== "" ? kategoriVal : undefined,
            pesan: messageVal
        };

        const res = await submitKotakSaran(payload);

        if (res && res.success) {
            alertContainer.innerHTML = `
                <div style="background-color: var(--success, #dcfce7); color: #166534; padding: 12px; border-radius: 8px; font-weight: 600;">
                    Aspirasi berhasil dikirim! Terima kasih atas masukan kamu.
                </div>
            `;
            auroraForm.reset();
        } else {
            alertContainer.innerHTML = `
                <div style="background-color: var(--danger, #fee2e2); color: #991b1b; padding: 12px; border-radius: 8px; font-weight: 600;">
                    Gagal mengirim aspirasi: ${res?.message || 'Terjadi kesalahan sistem.'}
                </div>
            `;
        }

        submitBtn.disabled = false;
        submitBtn.textContent = 'Kirim Aspirasi';
    });
});
