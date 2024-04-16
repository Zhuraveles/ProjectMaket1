
document.addEventListener("DOMContentLoaded", function () {



    //Swiper
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    parallax:true,
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


let p = 0;
let brandElem = document.getElementById('brands');
let readMoreElem = brandElem.querySelector('.content__readMore');
let text = brandElem.querySelector('.readMore__text');

readMoreElem.onclick = function() {
  p = p + 1;
  brandElem.classList.toggle('brands_open');
  if (p % 2 == 1) { text.textContent = "Скрыть"; }
  else { text.textContent = "Показать все"; }
};


let wrapperElem = document.getElementById('wrapper');
let buttonOpenElem = wrapperElem.querySelector('.buttonOpen');
let buttonCLoseElem = wrapperElem.querySelector('.buttonCLose');

buttonCLoseElem.onclick = function() {
  wrapperElem.classList.toggle('withLeftMenu');
};
buttonOpenElem.onclick = function() {
  wrapperElem.classList.toggle('withLeftMenu');
};