// JavaScript Document



// Scroll animation
 $(window).scroll(function scroll_animate() {
    if ($(this).scrollTop() > 950) {
		
		$('#cir1').addClass('div2_1');
		$('#cir2').addClass('div3_1');
		$('#cir3').addClass('div4_1');
		$('#cir4').addClass('div5_1');
		$('#cir5').addClass('div6_1');
		
		$('#preson_pic1').addClass('person1_1');
		$('#preson_pic2').addClass('person2_1');
		$('#preson_pic3').addClass('person3_1');
		$('#preson_pic4').addClass('person4_1');
		$('#preson_pic5').addClass('person5_1');
		$("#midd_div_text").addClass("midle_div_anim_text_1");

		}
});




// navibar animation

    $(document).ready(function nav_animate(){
      $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 5) { // check if user scrolled more than 50 from top of the browser window
          $(".navbar-fixed-top").css({"background-color" : "#000"}); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
          $(".navbar-fixed-top").css({"background-color" : "transparent"}); // if not, change it back to transparent
        }
      });
    });
	



// hover animation

$(document).ready(function hover_animate(){
    $('#person5-imgid' ).hover(
    function() { $( ".person5_text" ).fadeTo( 1500, '1'); },
    function() { $( ".person5_text" ).fadeTo( 1200, '0'); }
);

	$('#person4-imgid' ).hover(
    function() { $( ".person4_text" ).fadeTo( 1500, '1'); },
    function() { $( ".person4_text" ).fadeTo( 1200, '0'); }
);


$('#person3-imgid' ).hover(
    function() { $( ".person3_text" ).fadeTo( 1500, '1'); },
    function() { $( ".person3_text" ).fadeTo( 1200, '0'); }
);

$('#person2-imgid' ).hover(
    function() { $( ".person2_text" ).fadeTo( 1500, '1'); },
    function() { $( ".person2_text" ).fadeTo( 1200, '0'); }
);

$('#person1-imgid' ).hover(
    function() { $( ".person1_text" ).fadeTo( 1500, '1'); },
    function() { $( ".person1_text" ).fadeTo( 1200, '0'); }
);


});

