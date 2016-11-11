/* menu */


/* preload */
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});


/* menu on navbar */

$(document).ready(function(){

	var a=$(".mobile-menu-icon"),
	b=$(".mobile-menu"),
	c=($("body"),
	$(".mobile-menu a"));
	a.on("click",function(){a.toggleClass("active"),
		b.toggleClass("active")});
	var d=function(){a.removeClass("active"),
	b.removeClass("active")};
	c.on("click",function(){$(this);d()
	})


/* navibar */

    var waypoint = $(".waypoint").offset().top;

 $(window).scroll(function () { 
        if ($(document).scrollTop() > waypoint ) { 
            $(".navigation-bar").addClass("navigation-bar-animate")
        } else {
            $(".navigation-bar").removeClass("navigation-bar-animate")
        }
    });


/* smood scroll */

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

});



/* about us */



