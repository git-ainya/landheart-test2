// ScrollReveal(左から)
ScrollReveal().reveal('.scroll-reveal-left', { 
  duration: 1000,
  viewFactor: 0.1,
  origin: 'left', 
  distance: '2000px',
  reset: true   // アニメーション繰り返し
});

// ScrollReveal(左から時間差)
ScrollReveal().reveal('.scroll-reveal-left-after', { 
  duration: 3000,
  viewFactor: 0.1,
  origin: 'left', 
  distance: '2000px',
  reset: true   // アニメーション繰り返し
});

// ScrollReveal(右から)
ScrollReveal().reveal('.scroll-reveal-right', { 
  duration: 1000,
  viewFactor: 0.1,
  origin: 'right', 
  distance: '2000px',
  reset: true   // アニメーション繰り返し
});

// ScrollReveal(右から時間差)
ScrollReveal().reveal('.scroll-reveal-right-after', { 
  duration: 3000,
  viewFactor: 0.1,
  origin: 'right', 
  distance: '2000px',
  reset: true   // アニメーション繰り返し
});


// JQUERY

// ハンバーガ―メニュー
$('#menu_btn').on('click', function() {
  menuOpen();
});

function menuOpen() {
  $('#menu_btn').toggleClass('active');
  
  if ($('#menu_btn').hasClass('active')) {
    $('#menu_inner').addClass('active');
  } else {
    $('#menu_inner').removeClass('active');
  }

}


// アコーディオン(ecarchive)
$('.ac-parent').on('click', function () {
  $(this).next().slideToggle();
  
  //openクラスをつける
  $(this).toggleClass('open');

  //クリックされていないac-parentのopenクラスを取る
  $('.ac-parent').not(this).removeClass('open');
  
});


