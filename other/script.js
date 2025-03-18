AOS.init({
    once: true,
    mirror: false,
    duration: 800,
    easing: 'ease-out-cubic',
    offset: 120
});

// Dark Mode (code existant inchangé)
const toggleButton = document.getElementById('theme-toggle');
// ... (conserver le code dark mode existant) ...

// Effet Parallax
window.addEventListener('scroll', () => {
    document.querySelectorAll('.img-project').forEach(img => {
        const scrolled = window.pageYOffset;
        img.style.transform = `translate3d(0, ${scrolled * 0.02}px, 0)`;
    });
});

// Interaction au survol des cartes
document.querySelectorAll('.project').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});