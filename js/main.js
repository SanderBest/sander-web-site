AOS.init();

var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: false,
  spaceBetween: 50,

  // If we need pagination
  pagination: {
    el: ".slider-pagination",
    bulletClass: "slider-pagination__bullet",
    bulletActiveClass: "slider-pagination__bullet-active",
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar"
  }
});
