var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var productWeekBtn = document.querySelector(".product-week__order");
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.modal-overlay');
var modalBtn = document.querySelector('.modal__button');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

productWeekBtn.addEventListener('click', function() {
  modal.classList.remove('display-none');
  modal.classList.add("modal--show");
  overlay.classList.remove("display-none");
});

overlay.addEventListener('click', function(){
  modal.classList.add('display-none');
  modal.classList.remove('modal--show');
  overlay.classList.add('display-none');
});

modalBtn.addEventListener('click', function() {
  modal.classList.add('display-none');
  modal.classList.remove('modal--show');
  overlay.classList.add('display-none');
});
