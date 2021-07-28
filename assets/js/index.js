import '../css/style.scss';

const menu = document.querySelector('.menu');
const btn = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.menu__close');

btn.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
    btn.classList.toggle('hamburger_active');
});



closeMenu.addEventListener('click', () => {
    menu.classList.remove('menu--open');
    btn.classList.remove('hamburger_active');
});


