/*近期活動-slider-owl*/

jQuery(document).ready(function($) {
  "use strict";
  $('#customers-testimonials').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots:true,
    autoplayTimeout: 2000,
    smartSpeed: 450,
      responsive: {
        0: {
        items: 1
        },
        768: {
        items: 2
        },
        1170: {
        items: 3
        }
      }
  });
});
