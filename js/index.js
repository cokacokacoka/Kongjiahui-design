var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 0,
  speed: 2000,
  loop: true,
  autoplay: {
    delay: 500,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },
});
var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 5,
  spaceBetween: 0,
  speed: 2000,  // 设置播放速度为2秒
  loop: true,
  autoplay: {
    delay: 500,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    reverseDirection: true,// 反向自动播放,
  },
});