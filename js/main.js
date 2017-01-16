/* menu */
/* preload */

$(window).load(function() {
	// Animate loader off screen
	$(".se-pre-con").fadeOut("slow");;
});

// Preload of what ???

// SIMUN
$(document).ready(function() {
  
  // GLOBAL

  //nav bar representation
  //check for way point on loaded page
  if ($(".snt-waypoint").length > 0) {

    var waypointOffset = $(".snt-waypoint").offset().top;

    // hide the logo placeholder and title when on landing section
    window.onscroll = function(event) {
      if ($(document).scrollTop() > waypointOffset) {
        $('.snt-logo').fadeIn()
      }
      else {
        $('.snt-logo').fadeOut()
      }
    }

    // hide nav bar for new user, display it on scroll to content section
    $(window).scroll( function () { 
      if ($(document).scrollTop() > waypointOffset) { 
        $(".snt-nav-bar").show()
      } else {
        $(".snt-nav-bar").hide()
      }
    });  
  }
  else {
    $(".snt-nav-bar").show()
    $('.snt-logo').fadeIn()
  }

  //toggle menu and icon by appending and removing active class, check main.css for reference
  var toggleMenu = function() {
    $(".snt-menu-icon").toggleClass("active")
    $(".snt-menu-container").toggleClass("active")
  }

  // open close menu via menu icon
  $(".snt-menu-icon").click(function() {
    toggleMenu()
  })

  // close menu via body click
  $(".snt-menu-container").click(function() {
    toggleMenu()
  })

  // HOME PAGE

  $("#contact-button").click(function(){
    console.log("Contact")
    $('.snt-contact-form-container').show()
    $('.snt-contact-form-container').animate({opacity: '1'}, 1000);
    $('html, body').animate({scrollTop: $("#contact-button").offset().top}, 200);

  });

  // ABOUT PAGE

  // about us wheel menu
  var numberOfSections = 8
  var imgPaths = [
    "sintezis-circle.png",
    "simun.png",
    "sonja.png",
    "tom.png",
    "you.png",
    "goran.png",
    "andrej.png",
    "koza.png"
  ]

  //set pictures rotation programaticlly
  for (var i = 0; i < numberOfSections; i++) {
    var offset = (360 / numberOfSections) * i
    var sectionIndex = i + 1
    $(".snt-pie-section[pie-section='" + sectionIndex + "']").css({'transform' : 'rotate('+ offset +'deg)'})
  }
  
  //rotate the wheel to the right degree
  $(".snt-pie-section").click(function() {
    var sectionIndex = $(this).attr("pie-section") - 1 // we need index ranging from 0, to get the right section offset in deg
    var sectionOffsetDeg = (360 / numberOfSections) * sectionIndex

    //rotate imge
    $('.snt-pie-wheel-container').css({'transform' : 'rotate(-'+ sectionOffsetDeg +'deg)'});

    //load image
    $('.snt-wheel-display').fadeOut(500, function() {
      $(".snt-wheel-display").css('background-image','url(img/team/'+ imgPaths[sectionIndex] +')').fadeIn(500);
    })

    //load data
    $.getJSON("js/team_data.json", function(teamData){
      var title = teamData[sectionIndex].title
      var description = teamData[sectionIndex].description

      $(".snt-abount-content-container h1").text(title)
      $(".snt-about-content").html(description)
    })
  })


  // SANTEK
  /* smood scroll */
  $(function() {
    
    $('a[href*="#"]:not([href="#"])').click(function() {
      
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);

          return false;
        }
      }
    });
  });

});



