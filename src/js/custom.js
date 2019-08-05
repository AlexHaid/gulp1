// import {tns} from 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/min/tiny-slider.js';
  // var slider = tns({
  //   container: '.main-slider',
  //   items: 1,
  //   slideBy: 'page',
  //   autoplay: false,
  //   controlsText: ['<<', '>>'],
  //   navPosition: 'bottom'
  // });
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button.next',
      prevEl: '.swiper-button.prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });