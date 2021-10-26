
let burger = document.querySelector('.header__burger');
let nav = document.querySelector('.header__nav');

burger.addEventListener('click', function() {
  burger.classList.toggle('header__burger--active');
  nav.classList.toggle('header__nav--active');
});