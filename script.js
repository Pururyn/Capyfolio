// GESTION DU HEADER ET BOUTON RETOUR
window.addEventListener('scroll', () => {
    const backToTopButton = document.querySelector('.back-to-top');
    const nav = document.querySelector('nav');

    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
        nav.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
        nav.classList.remove('visible');
    }
});

// LOGIQUE DU SLIDER PROJETS (À l'extérieur du scroll)
const grid = document.querySelector('.project-grid');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
        grid.scrollLeft += grid.offsetWidth;
    });

    prevBtn.addEventListener('click', () => {
        grid.scrollLeft -= grid.offsetWidth;
    });
}