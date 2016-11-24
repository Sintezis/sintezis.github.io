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

    $(document).ready(function(){

      $("a").on('click', function(event) { 
        if (this.hash !== "") {     
          event.preventDefault();  
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
            window.location.hash = hash;
          });
        } 
      });
    });



/* about us */


	/* changing circle picture and rotation PERSON 1 */
      $( ".person-1-pic" ).click(function() {
		  $(".pieContainer").removeClass("pieContainer-move-2 pieContainer-move-3 pieContainer-move-4 pieContainer-move-5 pieContainer-move-6 pieContainer-move-7 pieContainer-move-8").addClass("pieContainer-move-1");
		 	 $(".sintezis-circle-img").fadeOut(500, function() {
        	 $(".sintezis-circle-img").css('background-image','url(img/team/sintezis-circle.png)').fadeIn(500);
    		});
	/* changing text about  */
        	$(".positon-text-about").addClass('show-hide-text-about');
        	$(".sintezis-text-about").removeClass('show-hide-text-about');
});

	/* changing circle picture and rotation  PERSON 2 */
       $( ".person-2-pic" ).click(function() {
       	$(".pieContainer").removeClass("pieContainer-move-1 pieContainer-move-3 pieContainer-move-4 pieContainer-move-5 pieContainer-move-6 pieContainer-move-7 pieContainer-move-8").addClass("pieContainer-move-2");
       		$(".sintezis-circle-img").fadeOut(400, function() {
        	 $(".sintezis-circle-img").css('background-image','url(img/team/simun.png)').fadeIn(400);
    		});
   	/* changing text about */
        	$(".positon-text-about").addClass('show-hide-text-about');
        	$(".person-2-text-about").removeClass('show-hide-text-about'); 	
});	

	/* changing circle picture and rotation PERSON 3 */
       $( ".person-3-pic" ).click(function() {
       	$(".pieContainer").removeClass("pieContainer-move-3 pieContainer-move-3 pieContainer-move-4 pieContainer-move-5 pieContainer-move-6 pieContainer-move-7 pieContainer-move-8").addClass("pieContainer-move-3");
       		$(".sintezis-circle-img").fadeOut(400, function() {
        	 $(".sintezis-circle-img").css('background-image','url(img/team/sonja.png)').fadeIn(400);
    		});
	/* changing text about */
    		$(".positon-text-about").addClass('show-hide-text-about');
        	$(".person-3-text-about").removeClass('show-hide-text-about');
    		
});
	/* changing circle picture and rotation PERSON 4 */
        $( ".person-4-pic" ).click(function() {
        	$(".pieContainer").removeClass("pieContainer-move-4 pieContainer-move-3 pieContainer-move-4 pieContainer-move-5 pieContainer-move-6 pieContainer-move-7 pieContainer-move-8").addClass("pieContainer-move-4");
  				$(".sintezis-circle-img").fadeOut(400, function() {
        	 $(".sintezis-circle-img").css('background-image','url(img/team/tom.png)').fadeIn(400);
    		});
	/* changing text about */
  			$(".positon-text-about").addClass('show-hide-text-about');
        	$(".person-4-text-about").removeClass('show-hide-text-about');
});

	/* changing circle picture and rotation  PERSON 5*/
        $( ".person-5-pic" ).click(function() {
        	$(".pieContainer").removeClass("pieContainer-move-5 pieContainer-move-3 pieContainer-move-4 pieContainer-move-5 pieContainer-move-6 pieContainer-move-7 pieContainer-move-8").addClass("pieContainer-move-5");
				$(".sintezis-circle-img").fadeOut(400, function() {
        	 $(".sintezis-circle-img").css('background-image','url(img/team/you.png)').fadeIn(400);
    		});		
	/* changing text about */
    		$(".positon-text-about").addClass('show-hide-text-about');
        	$(".person-5-text-about").removeClass('show-hide-text-about');
});

    /* changing circle picture and rotation PERSON 6*/
        $( ".person-6-pic" ).click(function() {
        	$(".pieContainer").removeClass("pieContainer-move-6 pieContainer-move-3 pieContainer-move-4 pieContainer-move-5 pieContainer-move-6 pieContainer-move-7 pieContainer-move-8").addClass("pieContainer-move-6");
				$(".sintezis-circle-img").fadeOut(400, function() {
        	 $(".sintezis-circle-img").css('background-image','url(img/team/goran.png)').fadeIn(400);
    		});	
	/* changing text about */
			$(".positon-text-about").addClass('show-hide-text-about');
        	$(".person-6-text-about").removeClass('show-hide-text-about');
});

    /* changing circle picture and rotation  PERSON 7*/
        $( ".person-7-pic" ).click(function() {
        	$(".pieContainer").removeClass("pieContainer-move-3 pieContainer-move-4 pieContainer-move-5 pieContainer-move-6  pieContainer-move-8").addClass("pieContainer-move-7");
 				$(".sintezis-circle-img").fadeOut(400, function() {
        	 $(".sintezis-circle-img").css('background-image','url(img/team/andrej.png)').fadeIn(400);
    		});		
	/* changing text about */
    		$(".positon-text-about").addClass('show-hide-text-about');
        	$(".person-7-text-about").removeClass('show-hide-text-about');	
});

                $( ".person-8-pic" ).click(function() {
            $(".pieContainer").removeClass("pieContainer-move-7 pieContainer-move-3 pieContainer-move-4 pieContainer-move-5 pieContainer-move-6 pieContainer-move-7").addClass("pieContainer-move-8");
                $(".sintezis-circle-img").fadeOut(400, function() {
             $(".sintezis-circle-img").css('background-image','url(img/team/koza.png)').fadeIn(400);
            });     
    /* changing text about */
            $(".positon-text-about").addClass('show-hide-text-about');
            $(".person-8-text-about").removeClass('show-hide-text-about');  
});




    $("#contact-button").click(function(){
           $('.contact-container').addClass('contact-container-animated');
           $('.contact-container').animate({opacity: '1'}, 1000);   
    });


});



