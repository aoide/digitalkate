$(function(){

    $('.card').click(function() {
        const url = $(this).attr('data-link');
        window.location.href = '/' + url;
    });

});
