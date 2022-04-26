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

AOS.init();




