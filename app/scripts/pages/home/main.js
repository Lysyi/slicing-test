'use strict';

$( '.header-menu-item .open' ).click(function(e) {
  e.preventDefault();
  $(this).next().slideToggle();
});

$('.js-main-slider').bxSlider({
  responsive: true,
  controls: false,
  auto: true,
  autoDelay: 100
});

$('.js-page-slider').bxSlider({
  responsive: true,
  controls: false,
  slideWidth: 290,
  minSlides: 1,
  maxSlides: 3,
  slideMargin: 20,
  hideControlOnEnd: true
});

// var slider = $('.js-page-slider').bxSlider();
// slider.goToNextSlide();

if($(window).width() <= 500) {
  $( '.header-menu-ico' ).click(function() {
    $( '.js-header-menu' ).slideToggle();
  });
} 