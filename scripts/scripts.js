$(function(){

    const smallBreakPoint = 700;

    const contentArea = $('#contentContainer');
    const navigationBar = $('#navigation');

    const selectedClass = 'selected';
    const openClass = 'open';

    setupProject();

    $('#navigation .step').click(function() {
        // remove previous selected
        navigationBar.children().removeClass(selectedClass);
        contentArea.children().removeClass(selectedClass);

        // adjust step class to clicked step
        $(this).addClass(selectedClass);

        // get ID of clicked step and convert to content ID
        let stepID = $(this).attr('id');
        stepID = '#content_step' + stepID.charAt(stepID.length - 1);
        $(stepID).addClass(selectedClass);

        if ($(window).width() <= smallBreakPoint) {
            navigationBar.toggleClass(openClass);
        }
    });

    $('.stepNavigation .button').click(function() {
        // remove previous selected
        navigationBar.children().removeClass(selectedClass);
        contentArea.children().removeClass(selectedClass);

        // get ID of clicked step
        const step = $(this).attr('data-step');

        if (step === 'home') {
            window.location.href = "https://www.digitalkate.net";
        } else {
            // select navigation
            const navID = '#nav_' + step;
            $(navID).addClass(selectedClass);

            // select content
            const contentID = '#content_' + step;
            $(contentID).addClass(selectedClass);
        }
    });

    $('.gallery .thumbnail').click(function() {
        $(this).siblings().removeClass(selectedClass);
        $(this).addClass(selectedClass);

        const src = $(this).attr('src');
        const alt = $(this).attr('alt');
        const title = $(this).attr('title');

        const gallery = $(this).closest('.gallery')[0];

        const mainImage = $(gallery).find('.mainImage')[0];
        $(mainImage).attr('src', src);
        $(mainImage).attr('title', title);
        $(mainImage).attr('alt', alt);

        const mainCaption = $(gallery).find('.caption')[0];
        $(mainCaption).html(title);
    });

    $('.gallery .toggle').click(function() {
        const gallery = $(this).closest('.gallery')[0];
        $(gallery).toggleClass('fullScreen');
    });

    $(window).resize(function() {
        navigationBar.removeClass(openClass);
    });

    function setupProject() {
        navigationBar.children().first('step').addClass(selectedClass);
        contentArea.children().first('content').addClass(selectedClass);

        $.each($('.gallery'), function() {
            const gallery = $('#' + $(this).attr('id'));

            const thumbnail = gallery.find('.thumbnail')[0];

            $(thumbnail).addClass(selectedClass);

            const src = $(thumbnail).attr('src');
            const title = $(thumbnail).attr('title');
            const alt = $(thumbnail).attr('alt');

            const mainImage = gallery.find('.mainImage img')[0];
            $(mainImage).attr('src', src);
            $(mainImage).attr('title', title);
            $(mainImage).attr('alt', alt);

            const mainCaption = gallery.find('.mainImage h4')[0];
            $(mainCaption).html(title);
        });
    }

});
