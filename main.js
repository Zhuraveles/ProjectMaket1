
document.addEventListener("DOMContentLoaded", function () {



    //Swiper
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    parallax:true,
    speed:1000,
    spaceBetween: 16,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      /*dynamicBullets: true,*/
    },
    /*navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },*/

  });

});
