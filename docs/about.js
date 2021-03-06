const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2")
};

const texts = ["Passion", "Challenge", "Development", "I'm", "Poseidon", ":)"];

const morphTime = 1;
const cooldownTime = 0.5;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
  }

  setMorph(fraction);
}

function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}

function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
      if (shouldIncrementIndex) {
          textIndex++;
      }

      doMorph();
  } else {
      doCooldown();
  }
}

animate();

//그래프
setTimeout(function(){

$('.bar').each(function(i){
  
  var $bar = $(this);
  setTimeout(function(){
    $bar.css('width', $bar.attr('data-percent'));      
  }, i*100);
});

}, 1000)

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
