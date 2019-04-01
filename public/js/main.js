
$(function() {
  AOS.init(
    { disable: 'mobile', }
  );
  

  //nav
  $(document).ready(function(){

    $(".slide-toggle").click(function(){
      $(this).toggleClass('active');
      $(".menu").animate({
        width: "toggle"
      });
      $('nav').toggleClass('open');
      $('.hamburger-menu').toggleClass('animate');
    })
  });

  $(document).on('click', '.nav-li', function(event) { 
    event.preventDefault(); 
    $(".slide-toggle").click(); 
    
});



    // Background data image
    $( ".bg-img" ).each(function() {
      var attr = $(this).attr('data-image-src');
    
      if (typeof attr !== typeof undefined && attr !== false) {
          $(this).css('background', 'url('+attr+') center bottom  / cover no-repeat');
      }
    
    });


   //Add animate class
   $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".animate-add").addClass("active");
    } else {
        $(".animate-add").removeClass("active");
    }
  });



  //Video Poster image
  $('.play').click(function() {
    video = '<iframe src="' + $(this).attr('data-video') + '"></iframe>';
    $(this).replaceWith(video);
  });

});


(function($) {
"use strict"; // Start of use strict
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });


  })(jQuery); // End of use strict




  


// Scroll Down Button
(function() {
  'use strict';

  var btnScrollDown = document.querySelector('#scroll_down');

  function scrollDown() {
    var windowCoords = document.documentElement.clientHeight;
    (function scroll() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 10);
        setTimeout(scroll, 0);
      }
      if (window.pageYOffset > windowCoords) {
        window.scrollTo(0, windowCoords);
      }
    })();
  }

  btnScrollDown.addEventListener('click', scrollDown);
})();
