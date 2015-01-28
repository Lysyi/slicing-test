'use strict';

$( '.header-menu-item .open' ).click(function(e) {
  e.preventDefault();
  $(this).next().slideToggle();
});

$( '.header-menu-ico' ).click(function() {
  $( '.js-header-menu' ).slideToggle();
});

$('.js-main-slider').bxSlider({
  responsive: true,
  controls: false,
  auto: true,
  autoDelay: 100
});

$('.js-page-slider').bxSlider({
  auto: true,
  responsive: true,
  controls: false,
  slideWidth: 290,
  minSlides: 1,
  maxSlides: 3,
  moveSlides: 1,
  slideMargin: 20,
  hideControlOnEnd: true
});

// var slider = $('.js-page-slider').bxSlider();
// slider.goToNextSlide();

// if($(window).width() <= 500) {

// } 