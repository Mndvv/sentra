// State untuk gallery
let currentEvent = null;
let currentImageIndex = 0;
let galleryImages = [];

// Fungsi untuk memuat data dari API
async function loadGalleryData() {
    try {
        const events = await fetchDokumentasi();
        renderGallery(events);
    } catch (error) {
        console.error('Gagal memuat gallery dari backend:', error);
        const c = document.getElementById('gallery-container');
        if (c) c.innerHTML = '';
    }
}

// Fungsi untuk merender gallery
function renderGallery(events) {
    const container = document.getElementById('gallery-container');
    if (!container) return;
    if (!events || events.length === 0) {
        container.innerHTML = '';
        return;
    }

    container.innerHTML = events.map(event => {
        const imgThumbUrl = getImageUrl(event.thumbnail);
        return `
        <div class="event-card" onclick="openGallery(${event.id})">
            <img src="${imgThumbUrl}" alt="${event.title}" style="width:100%; border-radius:12px; margin-bottom:1rem;">
            <div class="event-info">
                <small style="color:var(--accent);">${event.date}</small>
                <h3>${event.title}</h3>
                <p style="font-size:0.85rem; color:var(--text-muted);">${event.description}</p>
                <small style="color:var(--accent); display:block; margin-top:0.5rem;">${event.images.length} foto</small>
            </div>
        </div>`;
    }).join('');

    window.galleryEvents = events.reduce((acc, event) => {
        acc[event.id] = event;
        return acc;
    }, {});
}

function openGallery(eventId) {
    const event = window.galleryEvents?.[eventId];
    if (!event) return;

    currentEvent = event;
    currentImageIndex = 0;
    galleryImages = event.images;

    document.getElementById('modalEventTitle').textContent = event.title;
    document.getElementById('modalEventDate').textContent = event.date;

    updateMainImage();
    renderThumbnails();

    const modal = document.getElementById('galleryModal');
    if (modal) { modal.classList.add('show'); document.body.style.overflow = 'hidden'; }
}

function updateMainImage() {
    const image = galleryImages[currentImageIndex];
    const mainImage = document.getElementById('mainImage');
    const imageCaption = document.getElementById('imageCaption');
    const imageCounter = document.getElementById('imageCounter');

    if (!mainImage) return;
    mainImage.src = getImageUrl(image.url);
    imageCaption.textContent = image.caption;
    imageCounter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;

    document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentImageIndex);
        if (index === currentImageIndex) thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });
}

function renderThumbnails() {
    const thumbnailList = document.getElementById('thumbnailList');
    if (!thumbnailList) return;
    thumbnailList.innerHTML = galleryImages.map((image, index) => `
        <img src="${getImageUrl(image.url)}" alt="${image.caption}"
            class="thumbnail ${index === currentImageIndex ? 'active' : ''}"
            onclick="jumpToImage(${index})">`
    ).join('');
}

function nextImage() {
    if (currentImageIndex < galleryImages.length - 1) { currentImageIndex++; updateMainImage(); }
}

function prevImage() {
    if (currentImageIndex > 0) { currentImageIndex--; updateMainImage(); }
}

function jumpToImage(index) {
    if (index >= 0 && index < galleryImages.length) { currentImageIndex = index; updateMainImage(); }
}

function closeGallery() {
    const modal = document.getElementById('galleryModal');
    if (modal) { modal.classList.remove('show'); document.body.style.overflow = ''; }
}

// Keyboard navigation — delegated, safe for SPA re-renders
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('galleryModal');
    if (!modal || !modal.classList.contains('show')) return;
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'Escape') closeGallery();
});