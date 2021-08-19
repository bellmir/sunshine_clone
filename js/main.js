
// main banner용 Swiper
new Swiper(".main-banner .swiper-container", {
  slidePerView:1,
  loop:true,
  autoplay:{
    delay:5000
  },
  navigation:{
    prevEl:".main-banner .swiper-prev",
    nextEl:".main-banner .swiper-next"
  },
  pagination:{
    el: ".swiper-pagination",
    clickable:true
  },
});