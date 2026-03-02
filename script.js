window.addEventListener('scroll', () => {
    const backToTopButton = document.querySelector('.back-to-top');
    const nav = document.querySelector('nav'); // On récupère ton header

    // On affiche les deux si on a scrollé plus de 300 pixels
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
        nav.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
        nav.classList.remove('visible');
    }
});