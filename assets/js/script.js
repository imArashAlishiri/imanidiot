const header = document.querySelector('.header');
const openNavBtn = document.querySelector('.open-nav');
const closeNavBtn = document.querySelector('.close-nav');
const nav = document.querySelector('.nav');



function closeNav() {
    nav.classList.remove('show')
}

function openNav() {
    nav.classList.add('show');
}

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);
