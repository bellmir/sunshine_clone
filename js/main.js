// main banner용 Swiper
new Swiper(".main-banner .swiper-container", {
  slidePerView:1,
  loop:true,
  autoplay:{
    delay:4000
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


// toTop
const toTop = document.querySelector("#toTop");
window.addEventListener("scroll", _.throttle(()=>{
  if(window.scrollY>250){
    gsap.to(toTop, .3, {
      opacity: 1,
      display: 'block'
    })
  }
  else{
    gsap.to(toTop, .3, {
      opacity: 0,
      display: 'none'
    })
  }
}), 300);

// 떠오르는 animation 넣기
const riseAnimationEls = document.querySelectorAll(".riseAnimation");
riseAnimationEls.forEach(riseAnimationEl=>{
  new ScrollMagic
  .Scene({
    triggerElement: riseAnimationEl,
    triggerHook: .91
  })
  .setClassToggle(riseAnimationEl, "showRise")
  .reverse(false)
  .addTo(new ScrollMagic.Controller());
})
const slideAnimationEls = document.querySelectorAll(".slideAnimation");
slideAnimationEls.forEach(slideAnimationEl=>{
  new ScrollMagic
  .Scene({
    triggerElement: slideAnimationEl,
    triggerHook: .91
  })
  .setClassToggle(slideAnimationEl, "showSlide")
  .reverse(false)
  .addTo(new ScrollMagic.Controller());
})