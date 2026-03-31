/* ═══════════════════════════════════════════════
   SPONSOR.JS — Sponsorship & Kerjasama Page
   OSIS Nawasena 2025/2026
═══════════════════════════════════════════════ */

function initSponsor() {

    /* ── 1. SCROLL REVEAL ───────────────────────── */
    const revealObs = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

    /* ── 2. ANIMATED COUNTER ────────────────────── */
    function runCounter(el) {
        const target   = parseInt(el.dataset.target, 10);
        const suffix   = el.dataset.suffix || '';
        const steps    = Math.ceil(1600 / 16);
        const inc      = target / steps;
        let cur        = 0;
        const timer    = setInterval(() => {
            cur = Math.min(cur + inc, target);
            el.textContent = Math.floor(cur) + suffix;
            if (cur >= target) clearInterval(timer);
        }, 16);
    }

    const statsObs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.querySelectorAll('[data-target]').forEach(runCounter);
                statsObs.unobserve(e.target);
            }
        });
    }, { threshold: 0.4 });

    const statsRow = document.querySelector('.stats-row');
    if (statsRow) statsObs.observe(statsRow);

    /* ── 3. MARQUEE DUPLICATE ───────────────────── */
    const track = document.getElementById('marqueeTrack');
    if (track) track.innerHTML += track.innerHTML;

    /* ── 4. FORM SUBMIT ─────────────────────────── */
    const sponsorForm = document.getElementById('sponsorForm');
    const toast       = document.getElementById('spToast');

    sponsorForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        if (toast) {
            toast.classList.add('on');
            setTimeout(() => toast.classList.remove('on'), 4500);
        }
        sponsorForm.reset();
    });

    /* ── 5. SMOOTH ANCHOR SCROLL ────────────────── */
    document.querySelectorAll('.sp-anchor, .btn-primary-sp, .btn-outline-sp').forEach(a => {
        a.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (!href || !href.startsWith('#')) return;
            const target = document.querySelector(href);
            if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        });
    });
}