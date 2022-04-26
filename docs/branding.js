// up 버튼
$(document).ready(function () {
  $(".up-btn").click(function () {
    $("html , body").animate(
      {
        scrollTop: 0
      },
      300
    );
  });
});

$(window).scroll(function () {
  var test = $(this).scrollTop();

  console.log(test);

  if (test >= 1000) {
    $(".up-btn").addClass("active");
  } else if (test <= 1000) {
    $(".up-btn").removeClass("active");
  }
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
AOS.init();
