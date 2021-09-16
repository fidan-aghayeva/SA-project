"use strict";

/**
 * @description      : 
 * @author           : hp
 * @group            : 
 * @created          : 04/09/2021 - 19:50:12
 * 
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 04/09/2021
 * - Author          : hp
 * - Modification    : 
 **/
$(document).ready(function () {
  $('.owl-carousel-books').owlCarousel();
});
$(document).ready(function () {
  $('.owl-carousel-videos').owlCarousel();
});
$('.owl-carousel-books').owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});
$('.owl-carousel-videos').owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 3
    }
  }
});
var owlPrevArrow = document.querySelectorAll('.owl-nav .owl-prev');
var owlNextArrow = document.querySelectorAll('.owl-nav .owl-next');
owlPrevArrow.forEach(function (item) {
  item.innerHTML = "<img src=\"../../assets/images/icons/blue-prev-arrow.png\" alt=\"\">";
  item.addEventListener('mouseover', function () {
    item.innerHTML = "<img src=\"../../assets/images/icons/slider-white-prev-arrow.png\" alt=\"\">";
  });
  item.addEventListener('mouseout', function () {
    item.innerHTML = "<img src=\"../../assets/images/icons/blue-prev-arrow.png\" alt=\"\">";
  });
});
owlNextArrow.forEach(function (item) {
  item.innerHTML = "<img src=\"../../assets/images/icons/blue-next-arrow.png\" alt=\"\">";
  item.addEventListener('mouseover', function () {
    item.innerHTML = "<img src=\"../../assets/images/icons/slider-white-next-arrow.png\" alt=\"\">";
  });
  item.addEventListener('mouseout', function () {
    item.innerHTML = "<img src=\"../../assets/images/icons/blue-next-arrow.png\" alt=\"\">";
  });
});