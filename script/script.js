const navBar = document.getElementById('nav-bar');
const burger = document.getElementById('burger')
const header = document.getElementById('header')
const burgerImg = document.getElementById('burger-img')


burger.addEventListener('click', ()=>{
    burger.classList.toggle('active')
    navBar.classList.toggle('display');
    header.classList.toggle('menu-header');
    if(burger.classList.contains('active')) {
        burgerImg.src="/images/icon-close.svg"
    }
    else {
        burgerImg.src="/images/icon-hamburger.svg"
    }
})
