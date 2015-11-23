$(function () {
    $('button.navbar-toggle').click(function() {
        var bar = $('.icon-bar');
        if (bar.hasClass('animated')) {
            $(bar).removeClass('animated').addClass('animated-not');
        }
        else {
            $(bar).addClass('animated').removeClass('animated-not');
        }
    });
});