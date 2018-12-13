(function( $ ) {

    /**
     * [marginAfterHeader description] Add margin / Reason => Header is fixed !
     */
    function marginAfterHeader() {
        var header = $('header').height();
        $('header + *').css('margin-top', header);
    }

    /**
     * [toggleNav description] Show menu
     * Need class .icon-menu
     */
    function toggleNav() {
        $('.icon-menu').bind('click', function() {
            $('header').toggleClass('nav-opened');
        });
    };

    /**
     * [animationBox description] Add Class to launch animation
     * @param  {string}  $elementDetected  [description] Element loop
     * @param  {string}  $elementAnimation [description] Element add class animated
     * @param  {Boolean} $heightElement    [description] When launched the animation.
     */
    function animationBox($elementDetected, $elementAnimation, $heightElement= true) {
        $(window).bind('scroll', function() {
            // configuration element parent
            $elementLoop = $($elementDetected);
            // loop element parent
            $elementLoop.each(function(index, elt) {
                // position element
                $positionElement = $(elt).offset().top;
                // When launched the animation. If true ? 'when element is completely visible' : 'after 100px visible'
                if ($heightElement) {
                    $hBox = $(elt).height();
                } else {
                    $hBox = 100;
                }
                // position scroll window & height window
                $positionWindow = $(window).scrollTop();
                $heightWindow = $(window).height();

                if ( ($positionElement + $hBox) <= (($positionWindow - $hBox) + $heightWindow) ) {
                    if ($elementAnimation == null) {
                        $(elt).addClass('animated');
                    } else {
                        $(elt).find($elementAnimation).addClass('animated');
                    }
                }
            });
        });
    };

    /**
     * [toGo description] Go to the anchor with animation
     * Need class .anchor
     * Need attribute data-id with id element scroll
     */
    function toGo() {
        $('.anchor').bind('click', function() {
            var $dataId = $(this).attr('data-id');
            var $heightHeader = $('header').height();
            $('html, body').animate( {
                scrollTop: $('#' + $dataId).offset().top - $heightHeader
            }, 750);
        });
    };

    /**
     * [showPopin description] Bind click show popin
     */
    function showPopin() {
        $('.open-popin').bind('click', function() {
            $('.popin').addClass('show');
        });
    };

    /**
     * [hidePopin description] Bind click hide popin
     */
    function hidePopin() {
        $('.popin .close').bind('click', function() {
            $('.popin').removeClass('show');
        });
    };

    /**
     * [owlCarousel description] Define Carousel's settings
     * If you need different settings for more carousels, you can use parameters in this function
     */
    function owlCarousel() {
        $('.owl-carousel').owlCarousel({
            loop : false,
            nav : true,
            margin: 20,
            navText: [
                '<span class="icon fas fa-angle-left"></span>',
                '<span class="icon fas fa-angle-right"></span>'
            ],
            dots: true,
            autoplay : false,
            autoplayTimeout : 30000,
            responsive : {
                0 : { items : 1}
            }
        });
    };

    // READY
    $(document).ready( function() {
        // Header is fixed !
        marginAfterHeader();
        // Toggle Navigation
        toggleNav();
        // Anchor Scroll
        toGo();
        // Popin
        showPopin();
        hidePopin();
        // Carousel
        owlCarousel();
    });

})( jQuery );