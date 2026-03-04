let isAnimating = false;

// 1. GESTION DU HEADER ET BOUTON RETOUR
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

// 2. LOGIQUE DE SCROLL ÉCRAN PAR ÉCRAN (DÉTECTION DYNAMIQUE)
window.addEventListener('wheel', (e) => {
    if (isAnimating) return;

    // On récupère toutes les sections + le footer
    const targets = [...document.querySelectorAll('section'), document.querySelector('footer')];

    // On trouve quelle section est actuellement la plus visible à l'écran
    const currentScroll = window.scrollY;
    let currentIndex = 0;
    let minDistance = Math.abs(currentScroll - targets[0].offsetTop);

    targets.forEach((target, index) => {
        const distance = Math.abs(currentScroll - target.offsetTop);
        if (distance < minDistance) {
            minDistance = distance;
            currentIndex = index;
        }
    });

    // On décide de la direction
    if (e.deltaY > 0) {
        // Scroll vers le bas -> on va à la section suivante
        if (currentIndex < targets.length - 1) {
            scrollToTarget(targets[currentIndex + 1].offsetTop);
        }
    } else {
        // Scroll vers le haut -> on va à la section précédente
        if (currentIndex > 0) {
            scrollToTarget(targets[currentIndex - 1].offsetTop);
        }
    }
}, { passive: false });

function scrollToTarget(yPosition) {
    isAnimating = true;

    window.scrollTo({
        top: yPosition,
        behavior: 'smooth'
    });

    // On réduit un peu le délai (600ms au lieu de 800ms) pour plus de nervosité
    setTimeout(() => {
        isAnimating = false;
    }, 600);
}

// 3. LOGIQUE DU SLIDER PROJETS
const grid = document.querySelector('.project-grid');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', (e) => {
        grid.scrollLeft += grid.offsetWidth;
    });

    prevBtn.addEventListener('click', (e) => {
        grid.scrollLeft -= grid.offsetWidth;
    });
}