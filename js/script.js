$(document).ready(function() {

    $('.carousel').slick({
        asNavFor: '.carousel-bg',
        dots: true
    });
    $('.carousel-bg').slick({
        arrows: false,
        asNavFor: '.carousel',
        swipe: false,
        fade: true
    });

    $('.posts-big-carousel').slick();
    $('.posts-small-carousel').slick({
        autoplay: true,
        arrows: false,
        dots: true
    });
    $('.burger').click(function() {
        $('.nav-container').toggleClass('active');
        $('.burger').toggleClass('active');
    });
});