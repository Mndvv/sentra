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
                document.getElementById('gallery-container').innerHTML = '';
            }
        }

        // Fungsi untuk merender gallery
        function renderGallery(events) {
            const container = document.getElementById('gallery-container');
            if(!events || events.length === 0) {
                container.innerHTML = '';
                return;
            }

            container.innerHTML = events.map(event => {
                const imgThumbUrl = getImageUrl(event.thumbnail);
                return `
                <div class="event-card" onclick="openGallery(${event.id})">
                    <img src="${imgThumbUrl}" alt="${event.title}" style="width:100%; border-radius: 12px; margin-bottom: 1rem;">
                    <div class="event-info">
                        <small style="color: var(--accent);">${event.date}</small>
                        <h3>${event.title}</h3>
                        <p style="font-size: 0.85rem; color: var(--text-muted);">${event.description}</p>
                        <small style="color: var(--accent); display: block; margin-top: 0.5rem;">
                            ${event.images.length} foto
                        </small>
                    </div>
                </div>
                `;
            }).join('');

            // Simpan data events untuk digunakan nanti
            window.galleryEvents = events.reduce((acc, event) => {
                acc[event.id] = event;
                return acc;
            }, {});
        }

        // Fungsi untuk membuka gallery
        function openGallery(eventId) {
            const event = window.galleryEvents[eventId];
            if (!event) return;

            currentEvent = event;
            currentImageIndex = 0;
            galleryImages = event.images;

            // Update header
            document.getElementById('modalEventTitle').textContent = event.title;
            document.getElementById('modalEventDate').textContent = event.date;

            // Update main image
            updateMainImage();

            // Render thumbnails
            renderThumbnails();

            // Tampilkan modal
            const modal = document.getElementById('galleryModal');
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }

        // Fungsi untuk update gambar utama
        function updateMainImage() {
            const image = galleryImages[currentImageIndex];
            const mainImage = document.getElementById('mainImage');
            const imageCaption = document.getElementById('imageCaption');
            const imageCounter = document.getElementById('imageCounter');

            mainImage.src = getImageUrl(image.url);
            imageCaption.textContent = image.caption;
            imageCounter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;

            // Update active thumbnail
            document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
                if (index === currentImageIndex) {
                    thumb.classList.add('active');
                    // Scroll thumbnail ke tengah
                    thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                } else {
                    thumb.classList.remove('active');
                }
            });
        }

        // Fungsi untuk render thumbnails
        function renderThumbnails() {
            const thumbnailList = document.getElementById('thumbnailList');
            thumbnailList.innerHTML = galleryImages.map((image, index) => `
                <img 
                    src="${getImageUrl(image.url)}" 
                    alt="${image.caption}"
                    class="thumbnail ${index === currentImageIndex ? 'active' : ''}"
                    onclick="jumpToImage(${index})"
                >
            `).join('');
        }

        // Fungsi navigasi
        function nextImage() {
            if (currentImageIndex < galleryImages.length - 1) {
                currentImageIndex++;
                updateMainImage();
            }
        }

        function prevImage() {
            if (currentImageIndex > 0) {
                currentImageIndex--;
                updateMainImage();
            }
        }

        function jumpToImage(index) {
            if (index >= 0 && index < galleryImages.length) {
                currentImageIndex = index;
                updateMainImage();
            }
        }

        // Fungsi tutup gallery
        function closeGallery() {
            const modal = document.getElementById('galleryModal');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            const modal = document.getElementById('galleryModal');
            if (!modal.classList.contains('show')) return;

            switch(e.key) {
                case 'ArrowLeft':
                    prevImage();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
                case 'Escape':
                    closeGallery();
                    break;
            }
        });

        // Load data saat halaman dimuat
        document.addEventListener('DOMContentLoaded', () => {
            loadGalleryData();
        });