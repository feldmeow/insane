
var mySwiper = new Swiper('.prehero-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  // And if we need scrollbar
  breakpoints: {
    // when window width is >= 320px
    645: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 480px
    930: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
})

