var $circles = $('.circle');
var $circleTitle = $('.circle-title');
var circleOffsetTop = $circles.eq(0).offset().top - 800;

var expandCircles = function () {
    if ($circles.eq(0).hasClass('circle-expanded')) {
        return;
    }

    if ($(window).scrollTop() > circleOffsetTop) {
        $circles.addClass('circle-expanded');

        $('.person-1').addClass('person-1-moved');
        $('.person-2').addClass('person-2-moved');
        $('.person-3').addClass('person-3-moved');
        $('.person-4').addClass('person-4-moved');
        $('.person-5').addClass('person-5-moved');
        $("#midd_div_text").addClass("midle_div_anim_text_1");
    }
};

expandCircles();

$(window).scroll(expandCircles);

// hover animation

$(document).ready(function () {
    var fadeInSpeed = 500;
    var fadeOutSpeed = 500;
    var circleAnimationSpeed = 1300;

    $('.person-img').hover(
        function () {
            var textId = $(this).data('id');

            $circleTitle.stop().fadeOut();
            $circles.not('.circle-5').removeClass('circle-expanded');

            setTimeout(function() {
                $circles.addClass('circle-expanded');

                setTimeout(function() {
                    $('.person' + textId + '_text').fadeTo(fadeInSpeed, '1');
                }, circleAnimationSpeed);
            }, circleAnimationSpeed);

        },
        function () {
            $circleTitle.stop().fadeIn();

            var textId = $(this).data('id');
            $('.person' + textId + '_text').fadeTo(fadeOutSpeed, '0');
        }
    );


    $(window).scroll(function () { // check if scroll event happened
        if ($(document).scrollTop() > 5) { // check if user scrolled more than 50 from top of the browser window
            $(".navbar-fixed-top").css({"background-color": "#000"}); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
            $(".navbar-fixed-top").css({"background-color": "transparent"}); // if not, change it back to transparent
        }
    });


});