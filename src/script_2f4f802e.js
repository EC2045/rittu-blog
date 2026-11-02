function setMode(mode) {
    const corrected = mode === 'corrected';
    document.body.classList.toggle('is-corrected', corrected);
    document.getElementById('btn-original').classList.toggle('active', !corrected);
    document.getElementById('btn-corrected').classList.toggle('active', corrected);
    document.getElementById('btn-original').setAttribute('aria-pressed', String(!corrected));
    document.getElementById('btn-corrected').setAttribute('aria-pressed', String(corrected));
    document.querySelectorAll('.char-switch .original').forEach(el => el.setAttribute('aria-hidden', String(corrected)));
    document.querySelectorAll('.char-switch .corrected').forEach(el => el.setAttribute('aria-hidden', String(!corrected)));
    try { localStorage.setItem('rittu-blog-mode', corrected ? 'corrected' : 'original'); } catch {}
}
let savedMode = 'original';
try { savedMode = localStorage.getItem('rittu-blog-mode') || 'original'; } catch {}
setMode(savedMode);
window.addEventListener('site-language-change', () => setMode(document.body.classList.contains('is-corrected') ? 'corrected' : 'original'));
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.section-fade').forEach(el => observer.observe(el));
} else document.querySelectorAll('.section-fade').forEach(el => el.classList.add('visible'));
