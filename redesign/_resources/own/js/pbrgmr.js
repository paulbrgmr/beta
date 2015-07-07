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
            $('.portfolio-code, .portfolio-photo, .html, .css, .javascript, .php, .imovie').css({
                'opacity': opacityHalf,
                'transition': '0.3s'
            });
        }, function() {
            $('.portfolio-code, .portfolio-photo, .html, .css, .javascript, .php, .imovie').css({
                'opacity': opacityFull,
                'transition': '0.3s'
            });
        });

        $('.portfolio-code').hover(function() {
            $('.portfolio-design, .portfolio-photo, .photoshop, .illustrator, .indesign, .imovie').css({
                'opacity': opacityHalf,
                'transition': '0.3s'
            });
        }, function() {
            $('.portfolio-design, .portfolio-photo, .photoshop, .illustrator, .indesign, .imovie').css({
                'opacity': opacityFull,
                'transition': '0.3s'
            });
        });

        $('.portfolio-photo').hover(function() {
            $('.portfolio-design, .portfolio-code, .illustrator, .indesign, .html, .css, .javascript, .php').css({
                'opacity': opacityHalf,
                'transition': '0.3s'
            });
        }, function() {
            $('.portfolio-design, .portfolio-code, .illustrator, .indesign, .html, .css, .javascript, .php').css({
                'opacity': opacityFull,
                'transition': '0.3s'
            });
        });
    }

});