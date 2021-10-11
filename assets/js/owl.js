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

function callCarousel(className) {
    $(document).ready(function() {
        $(className).owlCarousel();
    });
}

callCarousel('.owl-carousel-books');
callCarousel('.owl-carousel-videos');
callCarousel('.owl-carousel-blog-details');

$('.owl-carousel-books').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        },
    },
});

$('.owl-carousel-videos').owlCarousel({
    loop: true,
    margin: 24,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
            margin: 20,
        },
        992: {
            items: 3,
        },
    },
});

$('.owl-carousel-blog-details').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        },
    },
});

$('.owl-carousel-interview-details').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        },
    },
});