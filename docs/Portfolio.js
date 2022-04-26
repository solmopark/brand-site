var mySwiper = new Swiper(".swiper-container", {
  direction: "vertical",
  loop: true,
  pagination: ".swiper-pagination",
  grabCursor: true,
  speed: 1000,
  paginationClickable: true,
  parallax: true,
  autoplay: false,
  effect: "slide",
  mousewheelControl: 1
});

// 커서
const $cursor = $('.cursor');
const $cursorSahdow = $('.cursor-shadow');

$(window).mousemove(function(e) {
  $cursor.css({
    top:e.clientY,
    left:e.clientX
  });
  
  $cursorSahdow.css({
    top:e.clientY,
    left:e.clientX
  });
});