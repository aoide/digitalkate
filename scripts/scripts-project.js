$(function(){

    $(window).scroll(function() {
        if ($(window).scrollTop() === 0) {
            $('body').removeClass('scrolled');
        } else {
            $('body').addClass('scrolled');
        }
    });

    const waypoint_01 = new Waypoint({
        element: document.getElementById('contentBlock_1'),
        handler: function() {
            setupNavigation(1);
        }
    });

    const waypoint_02 = new Waypoint({
        element: document.getElementById('contentBlock_2'),
        handler: function(direction) {
            if (direction === 'down') {
                setupNavigation(2);
            } else {
                setupNavigation(1);
            }
        }
    });

    const waypoint_03 = new Waypoint({
        element: document.getElementById('contentBlock_3'),
        handler: function(direction) {
            if (direction === 'down') {
                setupNavigation(3);
            } else {
                setupNavigation(2);
            }
        }
    });

    const waypoint_04 = new Waypoint({
        element: document.getElementById('contentBlock_4'),
        handler: function(direction) {
            if (direction === 'down') {
                setupNavigation(4);
            } else {
                setupNavigation(3);
            }
        }
    });

    function setupNavigation(navItem) {
        $('.navItem').removeClass('active');
        $('#navItem_' + navItem).addClass('active');
    }

});
