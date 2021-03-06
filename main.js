
$(document).ready(function() {
  $('.slider .item').owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      nav: false,
      navText: ['<i class="fas fa-chevron-left prev"></i>', '<i class="fas fa-chevron-right next"></i>'],
      autoplay: true,
      autoplayTimeout: 5000,
    })
});

$(document).ready(function() {
  $('.slider_extra .box-container .item').owlCarousel({
      items: 4,
      loop: true,
      dots: false,
      nav: true,  
      margin: 10,
      navText: ['<i class="fas fa-chevron-left prev"></i>', '<i class="fas fa-chevron-right next"></i>'],
      autoplay: false,
      // autoplayTimeout: 5000,
      responsive: {
        0: {
          items:1,
          nav:true
        },
        576:{
          items:1,
          nav:true
        },
        768:{
            items:2,
            nav:true
        },
        992: {
          items:3,
          nav:true,
        },
        1200:{
            items:4,
            nav:true,
            loop:true
        },
        1500: {
          items:4,
          nav:true,
          loop:true
        }
      }
    })
});