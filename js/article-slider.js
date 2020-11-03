var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'fade',
  speed: 1000,
  spaceBetween: 100,
  // Navigation arrows
  navigation: {
    nextEl: '.article-arrows__next',
    prevEl: '.article-arrows__prev',
  },
})