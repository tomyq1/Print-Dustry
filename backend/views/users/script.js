let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

function redirectToEditProduct(productId) {
    window.location.href = `/products/${productId}/update?dataSet=item`;
}

// Llama a sr.reveal() para cada elemento que deseas animar
sr.reveal('.hero-text', {delay: 200, origin: 'top'});
sr.reveal('.hero-img', {delay: 450, origin: 'top'});
sr.reveal('.icons', {delay: 500, origin: 'left'});
sr.reveal('.scroll-down', {delay: 500, origin: 'right'});
