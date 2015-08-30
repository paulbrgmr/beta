$( document ).ready(function() {
    var $navActive;
    $navActive = function (navActiveClass) {
        var leftCol = '.about, .profile, .portfolio, .contact';
        $(leftCol).removeClass('active');
        $(navActiveClass).addClass('active');
    };

    var $navActiveContent;
    $navActiveContent = function () {
        $('.profile-info, .portfolio-info, .contact-info').hide();
        $('.about-info').show();
    };


    var $about;
    $about = function () {
        $navActive('.about');
        $('.profile-info, .portfolio-info, .contact-info').hide();
        $('.about-info').show();
    };

    var $profile;
    $profile = function () {
        $navActive('.profile');
        $('.about-info, .portfolio-info, .contact-info').hide();
        $('.profile-info').show();
    };

    var $portfolio;
    $portfolio = function () {
        $navActive('.portfolio');
        $('.about-info, .profile-info, .contact-info').hide();
        $('.portfolio-info').show();
    };

    var $contact;
    $contact = function () {
        $navActive('.contact');
        $('.about-info, .profile-info, .portfolio-info').hide();
        $('.contact-info').show();
    };

    // ABOUT
    $navActiveContent();
    $('.about').click(function () {
        $about();
        $navActiveContent();
    });

    if (window.location.hash == "#about") {
        $about();
    }

    // PROFILE
    $('.profile').click(function () {
        $profile();
    });

    if (window.location.hash == "#profile") {
        $profile();
    }

    //PORTFOLIO
    $('.portfolio').click(function () {
        $portfolio();
    });

    if (window.location.hash == "#portfolio") {
        $portfolio();
    }

    //CONTACT
    $('.contact').click(function () {
        $contact();
    });

    if (window.location.hash == "#contact") {
        $contact();
    }

});