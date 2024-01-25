const hamburger = document.querySelector('.hamburger');
function openingFunc() {
    hamburger.classList.add('hamburger__active');
    document.body.style.background = 'linear-gradient(90deg, rgba(117,117,117,0.6559873949579832) 0%, rgba(0,0,0,0.4431022408963585) 35%)';
}

function closeFunc() {
    hamburger.classList.remove('hamburger__active');
    document.body.style.background = 'transparent';
}

window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('header__nav__active', window.scrollY > 25);
})
