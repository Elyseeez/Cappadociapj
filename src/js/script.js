
$(document).ready(function(){
    $('.carousel').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/perv.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next.svg"></button>',
    });
    $('[data-fancybox="images"]').fancybox({
        afterLoad : function(instance, current) {
          var pixelRatio = window.devicePixelRatio || 1;
      
          if ( pixelRatio > 1.5 ) {
            current.width  = current.width  / pixelRatio;
            current.height = current.height / pixelRatio;
          }
        }
      });
  });
          