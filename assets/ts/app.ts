/*=============== SHOW SCROLL UP ===============*/
const scrollUp = (): void => {
    const scrollUp = document.getElementById('scroll-up');
    
    // Ensure scrollUp exists and isn't null
    if (scrollUp) {
        // When the scroll is higher than 20px, add the show-scroll class
        window.scrollY >= 20 ? scrollUp.classList.add('show-scroll')
                             : scrollUp.classList.remove('show-scroll');
    }
};

// Add scroll event listener
window.addEventListener('scroll', scrollUp);