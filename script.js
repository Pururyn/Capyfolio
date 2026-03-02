window.addEventListener('scroll', () => {
    const backToTopButton = document.querySelector('.back-to-top');

    // On affiche le bouton si on a scrollé plus de 300 pixels
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});