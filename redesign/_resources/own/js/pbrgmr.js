$(document).ready(function(){
    setTimeout(function() {
         $('h1').addClass('fadeIn');
    }, 500);
    
    // center content of about
    var aboutCenterInner = $('.vp-center').height();
    var aboutCenterOuter = $('#about').height();

    $('.vp-center').css({
        'padding-top' : ((contactCenterOuter / 2) - (contactCenterInner / 2))
    });

    // center content of contact
    var contactCenterInner = $('.vp-center').height();
    var contactCenterOuter = $('#contact').height();

    $('.vp-center').css({
        'padding-top' : ((contactCenterOuter / 2) - (contactCenterInner / 2))
    });

    $('#formular-text').remove();
/*
    $('#formular').load('contact.html');
    if(window.location.href.indexOf("formular-submit") > 0) {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 0001);
    }
*/

    var hoverAnimation = 1200;

    if ($(document).width() > hoverAnimation) {

        var opacityHalf = 0.5;
        var opacityFull = 1;

        $('.portfolio-design').hover(function() {
            $("#design-hover").attr("src","_resources/own/img/svg/design-colored.svg");
            $('.portfolio-code, .portfolio-photo, .html, .css, .javascript, .php, .imovie').css({
                'opacity': opacityHalf,
                'transition': '0.3s'
            });
        }, function() {
            $("#design-hover").attr("src","_resources/own/img/svg/design.svg");
            $('.portfolio-code, .portfolio-photo, .html, .css, .javascript, .php, .imovie').css({
                'opacity': opacityFull,
                'transition': '0.3s'
            });
        });

        $('.portfolio-code').hover(function() {
            $("#code-hover").attr("src","_resources/own/img/svg/code-colored.svg");
            $('.portfolio-design, .portfolio-photo, .photoshop, .illustrator, .indesign, .imovie').css({
                'opacity': opacityHalf,
                'transition': '0.3s'
            });
        }, function() {
            $("#code-hover").attr("src","_resources/own/img/svg/code.svg");
            $('.portfolio-design, .portfolio-photo, .photoshop, .illustrator, .indesign, .imovie').css({
                'opacity': opacityFull,
                'transition': '0.3s'
            });
        });

        $('.portfolio-photo').hover(function() {
            $("#photo-hover").attr("src","_resources/own/img/svg/photo-colored.svg");
            $('.portfolio-design, .portfolio-code, .illustrator, .indesign, .html, .css, .javascript, .php').css({
                'opacity': opacityHalf,
                'transition': '0.3s'
            });
        }, function() {
            $("#photo-hover").attr("src","_resources/own/img/svg/photo.svg");
            $('.portfolio-design, .portfolio-code, .illustrator, .indesign, .html, .css, .javascript, .php').css({
                'opacity': opacityFull,
                'transition': '0.3s'
            });
        });
    }

});