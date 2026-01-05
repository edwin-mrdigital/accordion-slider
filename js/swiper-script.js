const swiperOne = new Swiper('.swiper-one', {
   loop: true,
   centeredSlides: true,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   breakpoints: {
      640: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      768: {
         slidesPerView: 4,
         spaceBetween: 40,
      },
      1400: {
         slidesPerView: 4.8,
         spaceBetween: 30,
      },
   },
});
