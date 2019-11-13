$(document).ready(function(){
  // 대메뉴
lnb();
function lnb(){
  var lnb = $('.lnb > ul > li');
  var lnb_last = $('.lnb li:last-child');
  lnb.on('mouseenter keyup', function(){
    $(this).siblings('li').removeClass('on');
    $(this).addClass('on');
  });
  lnb.on('mouseleave', function(){
    $(this).removeClass('on');
  });
  lnb_last.on('blur', function(){
    $(this).parent('li').removeClass('on');
  });
};

  //셀렉박스
  select();
  function select(){
    var sel_btn = $('.select button');
    var sel_list = $('.select a');

    sel_btn.next('ul').hide();
    sel_btn.on('click', function(){
      var txt = $(this).next().find('a').text();
      $(this).next().slideToggle(200);
      $(this).toggleClass('on');
      event.preventDefault();
    });
    sel_list.on('click', function(){
      var txt = $(this).text();
      var ul = $(this).parent().parent();
      var btn = $(this).parents('.select').children('button');
      ul.slideUp(200);
      btn.text(txt);
      btn.removeClass('on');
      event.preventDefault();
    });
  }

// 반응형
  $('.btn').on('click', function(){
    var width = $(window).width();
    if( width >= 1024){
      $('.bx').css('background','red');
    }else if( width < 1024){
      $('.bx').css('background','orange');
    }
  });
// 반응형2
  $(window).on('resize', function(){
    var width = $(window).width();
    if( width >= 1024){
      $('.bx').css('color','blue');
    }else if( width < 1024){
      $('.bx').css('color','pink');
    }
  });

// 스크롤 탑
  $('.top').on('click', function(){
    $('body, html').animate({scrollTop:0}, 500);
    event.preventDefault();
  });



// 스크롤 이벤트
  scroll();
  function scroll(){
    $(window).on('scroll', function(){
      $('.bx').each(function(){
        var ele = $(this).offset().top + $(this).height();
        var win = $(window).scrollTop() + $(window).height();
        console.log($(window).height());
        if(ele < win){
            $(this).addClass('on');
        }
      });
    });
  }
// 스크롤 이벤트
$(window).on('scroll', function(){
  var hig = $(document).height(); //html body의 높이
  var scr = $(window).scrollTop();
  var winhig = $(window).height();
  var wid = (scr / (hig - winhig)) * 100;
  var num = Math.round(wid);
  if(scr == 0){
    $('.bar').text('');
  }else{
    $('.bar').stop().animate({
      width: num + '%'
    }, 500);
    $('.bar').text(num + "%");
  }
  console.log(hig);
});

  $('.selector a').on('click', function(){
      var ele = $(this).parent().html();
      $('.selector').prepend(ele);
      return false;
  });


// 반응형 호환성
 var user = navigator.userAgent;
 $('.bx').text(user);

 if (navigator.userAgent.indexOf("Chrome") !== -1){
    $('.bx').css('color','blue');
} else { $('.bx').css('color','orange'); }

// 아이폰
// var agent = navigator.userAgent.toLowerCase();
// if (agent.match(/iphone/) != null || agent.match(/ipad/) != null) {
//   $('head').append('<link rel="stylesheet" href="css/ios.css">');
// }else {
//   $('head').append('<link rel="stylesheet" href="css/android.css">');
// }
//


 var agent = navigator.userAgent;

if (agent.match(/iPhone | ipad/gi)){
  $('head').append('<link rel="stylesheet" href="ios.css">');

}else if (agent.match(/SM-G965N | IM-A860L/gi)){
  $('head').append('<link rel="stylesheet" href="other.css">');
}else {
  $('head').append('<link rel="stylesheet" href="android.css">');
}


  var slide = $('.slider').bxSlider({
    auto:true,  // 자동슬라이드 설정
    pause:1000,  // 좌우or상하 용 슬라이드 머무는 시간
    minSlides:1, //최소 보여질 슬라이드 갯수
    maxSlides:3, //최대 보여질 슬라이드 갯수
    slideWidth:300, // 슬라이드 1개의 가로 사이즈
    moveSlides:2, // 슬라이드 이동시 몇단계를 이동할지 설정
    stopAutoOnClick:false,
    autoDelay:0, // fade를 할때에는 autoDelay와 함께 사용
    wrapperClass:'slide_type1',
    pagerType:'short', //full갯수만큼, short 1/n
    //mode:'fade'
    // boolean : true or false
    // number : 1000
    // string : "문자" or '문자'
  });

  $('.slide_type1').hide();
  $('.open').on('click', function(){
    $('.slide_type1').show();
    slide.reloadSlider(); //다시 로드시킴
  });


    var slide1 = $('.slider2').bxSlider({
      auto:true,  // 자동슬라이드 설정
      pause:1000,  // 좌우or상하 용 슬라이드 머무는 시간
      minSlides:1, //최소 보여질 슬라이드 갯수
      maxSlides:1, //최대 보여질 슬라이드 갯수
      slideWidth:300, // 슬라이드 1개의 가로 사이즈
      moveSlides:1, // 슬라이드 이동시 몇단계를 이동할지 설정
      stopAutoOnClick:false,
      // wrapperClass:'slide_type2',
      pagerType:'short', //full갯수만큼, short 1/n
      // touchEnabled:false 터치 못하게 막음
    });
    $('.next').on('click', function(){
      slide1.goToNextSlide();
    });
    $('.play2').on('click',function() {
        slide1.startAuto();
    });


});
