$(function(){

    $(window).scroll(function() {
        if ($(window).scrollTop() === 0) {
            $('.project .heading').removeClass('scrolled');
        } else {
            $('.project .heading').addClass('scrolled');
        }
    });

});
