const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navList = document.querySelector('.nav-list');
const rightNav = document.querySelector('.rightNav');
const body = document.querySelector('body');

burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('visibility-class');
    navList.classList.toggle('visibility-class');
    navbar.classList.toggle('h-nav');
})
