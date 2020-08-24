$(function(){
    const body = $('body');
    const navItems = $('.navItem');

    $('#navItem_1').addClass('active');

    navItems.click(function() {
        navItems.removeClass('active');
        $(this).addClass('active');

        const itemID = $(this).attr('id');
        const itemNumber = itemID.charAt(itemID.length - 1);
        const location = $('#contentBlock_' + itemNumber)[0].offsetTop - 80;
        $(window).scrollTop(location - 80);
    });

    $(window).scroll(function() {
        const scrollPosition = $(window).scrollTop();

        if (scrollPosition === 0) {
            body.removeClass('scrolled');
        } else {
            body.addClass('scrolled');
        }

        const element = $('#contentBlock_4')[0];
        const elementBottom = element.offsetTop - element.offsetHeight;
        if (scrollPosition + 100 > elementBottom) {
            setupNavigation(4);
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
            }
        },
        offset: '50%'
    });

    const waypoint_02_up = new Waypoint({
        element: document.getElementById('contentBlock_3'),
        handler: function(direction) {
            if (direction === 'up') {
                setupNavigation(2);
            }
        },
        offset: '80%'
    });

    const waypoint_03 = new Waypoint({
        element: document.getElementById('contentBlock_3'),
        handler: function(direction) {
            if (direction === 'down') {
                setupNavigation(3);
            }
        },
        offset: '50%'
    });

    const waypoint_03_up = new Waypoint({
        element: document.getElementById('contentBlock_4'),
        handler: function(direction) {
            if (direction === 'up') {
                setupNavigation(3);
            }
        },
        offset: '80%'
    });

    const waypoint_04 = new Waypoint({
        element: document.getElementById('contentBlock_4'),
        handler: function() {
            setupNavigation(4);
        },
        offset: '50%'
    });

    function setupNavigation(navItem) {
        navItems.removeClass('active');
        $('#navItem_' + navItem).addClass('active');
    }

});
