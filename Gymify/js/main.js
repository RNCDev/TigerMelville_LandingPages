(function($) {
	"use strict";
    
$(document).ready(function() {    
    
    //Preload
    $(window).load(function() {
        $(".roof-loading").fadeOut("slow");
    });    
    
//SmothScroll
try {
    $.browserSelector();

        // Adds window smooth scroll on chrome, opera.
        if($("html").hasClass("chrome" || "opera")) {
           $.smoothScroll();
        }

} catch(err) {} 
    
    //Stellar
    $(window).stellar({
        horizontalScrolling:false
    });    
    
    //Nav Scroll
    var Window = $(window),
        Nav = $(".roof-nav-btn");
    
    Window.scroll(function() {
        if (Window.scrollTop() >= 100) {
            Nav.addClass("roof-nav-scroll")
        } else {
            Nav.removeClass("roof-nav-scroll")
        }
    });
    
/*Nav Sliding*/    
    $(".roof-nav-btn .nav-btn ul li").click(function() {
        $(".roof-nav").toggleClass("roof-nav-active"),
        $(".roof-nav-screen").toggleClass("roof-screen-on")
    });
    
    $(".roof-nav .close-btn").click(function() {
        $(".roof-nav").toggleClass("roof-nav-active"),
        $(".roof-nav-screen").toggleClass("roof-screen-on")
    });
    
    $(".roof-nav-screen").click(function() {
        $(".roof-nav").toggleClass("roof-nav-active"),
        $(".roof-nav-screen").toggleClass("roof-screen-on")
    });
    
    $(".roof-nav ul li a").click(function() {
        $(".roof-nav").toggleClass("roof-nav-active"),
        $(".roof-nav-screen").toggleClass("roof-screen-on")        
    });
    
//SmothScroll target
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
}); 
    
    //01 SS Carousel
    $("#ss-01").owlCarousel({

    items: 4,
    margin: 30,
    slideSpeed : 300,
    paginationSpeed : 400,
    autoPlay: true,

    });
    
    //02 SS Carousel
    $("#ss-02").owlCarousel({

    items: 3,
    margin: 30,
    slideSpeed : 300,
    paginationSpeed : 400,
    autoPlay: true,

    });    
    
    //01 QUOTE Carousel
    $("#quote-01").owlCarousel({

    items: 1,
    singleItem: true,
    slideSpeed : 100,
    paginationSpeed : 400,
    autoPlay: true,

    });  
    
    //02 QUOTE Carousel
    $("#quote-02").owlCarousel({

    items: 1,
    singleItem: true,
    slideSpeed : 200,
    paginationSpeed : 400,
    autoPlay: true,

    });
    
    //03 QUOTE Carousel
    $("#quote-03").owlCarousel({

    items: 2,
    slideSpeed : 200,
    paginationSpeed : 400,
    autoPlay: true,

    });    
    
    //Contact Form
    $("form#roof-contact_form").submit(function() {
        var hasError = false;
        
        if(!hasError) {
            var formInput = $(this).serialize();
            $.post($(this).attr('action'),formInput, function(data) {
                $('.roof-msg').removeClass('roof-hide-msg');
            });
        }
        return false;
    });
    
    $(".roof-msg a").click(function(event) {
        event.preventDefault();
        $(".roof-msg").addClass("roof-hide-msg");
    });
    
    /*Subscribe*/
  $('form#roof-subscribe').submit(function() {
    var hasError = false;
          
    if(!hasError) {
      var formInput = $(this).serialize();
      $.post($(this).attr('action'),formInput, function(data){
        $('.roof-subs').removeClass('roof-hide-subs');
      }); 
    }
    
    return false; 
  });

    $(".roof-subs a").click(function(event) {
        event.preventDefault();
        $(".roof-subs").addClass("roof-hide-subs");
    });
    
    
    
});
    
})(jQuery);    




