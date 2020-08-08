$(function(){

    const openClass = 'open';
    const selectedClass = 'selected';

    setupGallery();

    $('.teaser .button').click(function() {
        const button = $(this).attr('id');
        const gallery = '#gallery_' + button.charAt(button.length - 1);
        $(gallery).parent().removeClass('hidden');
        $('body').addClass('openGallery');

        const topPosition = $(document).scrollTop();
        let styles = {
            top: topPosition + 'px',
            bottom: '-' + topPosition + 'px'
        }
        $(gallery).siblings('.shadow').css(styles);
        $(gallery).siblings('.heading').css(styles);
        styles = {
            top:  (topPosition + 40) + 'px',
            bottom: '-' + topPosition + 'px'
        }
        $(gallery).css(styles);
    });

    $('.gallery .button').click(function() {
        const button = $(this).attr('id');
        const gallery = '#gallery_' + button.charAt(button.length - 1);
        $(gallery).parent().addClass('hidden');
        $('body').removeClass('openGallery');

        $(gallery).siblings('.shadow').removeAttr('style');
        $(gallery).siblings('.heading').removeAttr('style');
        $(gallery).removeAttr('style');
    });

    $('.galleryBox .thumbnails img').click(function() {
        $(this).siblings().removeClass(selectedClass);
        $(this).addClass(selectedClass);

        const src = $(this).attr('src');
        const title = $(this).attr('title');
        const alt = $(this).attr('alt');
        const caption = $(this).attr('data-caption');

        const gallery = '#' + $(this).closest('.galleryBox').attr('id');

        const mainImage = $(gallery + ' .mainImage img');
        mainImage.attr('src', src);
        mainImage.attr('title', title);
        mainImage.attr('alt', alt);

        const mainCaption = $(gallery + ' .mainImage h4');
        mainCaption.html(caption);
    });

    $(window).resize(function() {
        $('.navigation').removeClass(openClass);
    });

    function setupGallery() {
        $('.gallery').addClass('hidden');

        $.each($('.galleryBox'), function() {
            const gallery = '#' + $(this).attr('id');

            const firstThumbnail = $(gallery + ' .thumbnails img:first-child');

            firstThumbnail.addClass(selectedClass);

            const src = firstThumbnail.attr('src');
            const title = firstThumbnail.attr('title');
            const alt = firstThumbnail.attr('alt');
            const caption = firstThumbnail.attr('data-caption');

            const mainImage = $(gallery + ' .mainImage img');
            mainImage.attr('src', src);
            mainImage.attr('title', title);
            mainImage.attr('alt', alt);

            const mainCaption = $(gallery + ' .mainImage h4');
            mainCaption.html(caption);
        });
    }

});
