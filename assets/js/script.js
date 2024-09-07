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

window.addEventListener('resize', (e) => {
    let width = e.target.innerWidth
    if(width >= '500') {
        closeNav();
    } else {
        if(!nav.classList.contains('mobile-nav')) {
            nav.classList.add('mobile-nav')
        }
    }
})
