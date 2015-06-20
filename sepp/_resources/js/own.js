$(document).ready(function(){
    $('#navbar').load('navbar.html');
    $('#formular').load('formular.php');
    $('#made-by').html('Responsive Website Umsetzung:<br><a href="http://www.pbergmeir.com" target="_blank">Paul Bergmeir</a>');
    $('.slick-slider').slick({
        accessibility: true,
        dots: true
    });
});