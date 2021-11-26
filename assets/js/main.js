(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


 // owlCarousel
 $(".game_slider").owlCarousel({
  loop: true,
  margin: 30,
  items: 1,
  nav: false,
  dots: true
});


  /* magnificPopup img view */
  $(".play-btn").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    }
  }); 

 
})(jQuery);
