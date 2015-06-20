$(document).ready(function(){
    $('#head').load('head.html');
    $('#navbar').load('navbar.html');
    $('.slick-slider').slick({
        accessibility: true,
        dots: true
    });
});