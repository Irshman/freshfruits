
let burger = document.querySelector('.header__burger');
let nav = document.querySelector('.header__nav');
let button = document.querySelector(".header__btn");

burger.addEventListener('click', function() {
  burger.classList.toggle('header__burger--active');
  nav.classList.toggle('header__nav--active');
  button.classList.toggle('header__btn--active');
});