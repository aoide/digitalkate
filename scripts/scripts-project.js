$(function(){

    const smallBreakPoint = 700;
    const openClass = 'open';
    const selectedClass = 'selected';

    setupProject();

    $('.stepNavigation .navItem').click(function() {
        // remove previous selected
        $('.stepNavigation .navItem').removeClass(selectedClass);
        $('.contentBlock').removeClass(selectedClass);

        // adjust step class to clicked step
        $(this).addClass(selectedClass);

        // get ID of clicked step and convert to content ID
        let stepID = $(this).attr('id');
        stepID = '#content_' + stepID.charAt(stepID.length - 1);
        $(stepID).addClass(selectedClass);

        if ($(window).width() <= smallBreakPoint) {
            $('.stepNavigation').toggleClass(openClass);
        }
    });

    $('.historyNavigation .button').click(function() {
        // remove previous selected
        $('.stepNavigation .navItem').removeClass(selectedClass);
        $('.contentBlock').removeClass(selectedClass);

        // get ID of clicked step
        const step = $(this).attr('data-step');
        const number = step.charAt(step.length - 1);

        if (step === 'home') {
            window.location.href = "https://www.digitalkate.net";
        } else {
            // select navigation
            const navID = '#subNav_step' + number;
            $(navID).addClass(selectedClass);

            // select content
            const contentID = '#content_' + number;
            $(contentID).addClass(selectedClass);
        }
    });

    $('.fakeButton').click(function() {
        const newUrl = $(this).attr('data-url');
        window.open(newUrl, '_blank');
    });

    function setupProject() {
        $('.stepNavigation .navItem').first().addClass(selectedClass);
        $('.contentBlock').first().addClass(selectedClass);
    }

});
