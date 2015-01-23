'use strict';

console.log('test1');
$( '.header-menu-item .open' ).click(function(e) {
  e.preventDefault();
  $(this).next().slideToggle();
});


    