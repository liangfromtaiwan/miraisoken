// header
$(document).ready(function () {
  $(".header__menu__item--slideDown a").click(function (e) {
    e.preventDefault();
    $(this).siblings().slideToggle();
    $(this).parent().siblings().find(".slideDown").slideUp();
    $(this).parent().toggleClass("active");
    $(this).parent().siblings().removeClass("active");
  });
  $("body").click(function (e) {
    e.preventDefault();
    $(".slideDown").slideUp();
    $(".header__menu__item--slideDown").removeClass("active");
  });
  // scroll
    $(window).on("scroll", function () {
    if ($(this).scrollTop() > 256) {
      $("#top .header__sp__logo").css("display","block");
      $("#top .header__wrap").css("background","#fff");
      $("#top .header__wrap").css("border-bottom","1px solid #5CCDE0");
    } else {
      $("#top .header__sp__logo").css("display","none");
      $("#top .header__wrap").css("background","none");
      $("#top .header__wrap").css("border-bottom","1px solid transparent");
    }
  });
});

// hamburger
$(document).ready(function () {
  $(".header__hamburger").click(function (e) {
    e.preventDefault();
    $(".header__menu").toggleClass("active");
    $(".header__hamburger").toggleClass("active");
  });
  
});

// top-mv
$(document).ready(function () {
  $(".nav__menu__items a").click(function (e) { 
    e.preventDefault();
    $(this).siblings().slideToggle();
  });
});


//入塾までの流れについてに戻る
$(document).ready(function () {
  $("#toStep").on("click", function () {
    $("html, body").animate({
      scrollTop: $("#step").offset().top - 150
    }, 500);
    $(this).parent().parent().parent().parent().find("#step .faq__content__list__item__a").slideDown(1000);
    $(this).parent().parent().parent().parent().find("#step").addClass("active");
  });
});

//入塾までの流れについてに戻る
$(document).ready(function () {
  $("#totoStep").on("click", function () {
    $("html, body").animate({
      scrollTop: $("#step").offset().top - 150
    }, 500);
    $(this).parent().parent().parent().parent().siblings().find("#step .faq__content__list__item__a").slideDown(1000);
    $(this).parent().parent().parent().parent().siblings().find("#step").addClass("active");
  });
});


//faq slide down
$(document).ready(function () {
  $(".faq__content__list--active .faq__content__list__item__q").click(function (e) {
    e.preventDefault();
    $(this).parent().toggleClass("active");
    $(this).parent().find(".faq__content__list__item__a").slideToggle();
  });
});
$(document).ready(function () {
  $(".faq__content__list .faq__content__list__item__q").click(function (e) {
    e.preventDefault();
    $(this).parent().toggleClass("active");
    $(this).parent().find(".faq__content__list__item__a").slideToggle();
  });
});




//ページ内リンクのスムーズスクロールを実装
// スムーズスクロール
$(function () {
  $('a[href^="#"]:not(a.lightbox)').click(function () {
    var speed = 300;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 30; // 60pxの余白をつける
    $('html,body').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });
});