$(document).ready(function(){
    setTimeout(function() {
         $('h1').addClass('fadeIn');
    }, 500);
    // center content of contact
    var contactCenterInner = $('.vp-center').outerHeight();
    var contactCenterOuter = $('#contact').outerHeight( true );

    $('.vp-center').css({
        'padding-top' : (contactCenterOuter - contactCenterInner) / 2
    });

    // center content of about
    var aboutCenterInner = $('.vp-center').outerHeight();
    var aboutCenterOuter = $('#about').outerHeight( true );

    $('.vp-center').css({
        'padding-top' : (contactCenterOuter - contactCenterInner) / 2
    });
});
