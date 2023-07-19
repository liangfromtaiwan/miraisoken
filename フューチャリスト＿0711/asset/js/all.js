//入塾までの流れについてに戻る
$(document).ready(function () {
  $("#toStep").on("click", function () {
    $("html, body").animate({
      scrollTop: $("#step").offset().top - 100
    }, 500);
    $(this).parent().parent().parent().parent().find("#step .faq__content__list__item__a").slideDown(1000);
    $(this).parent().parent().parent().parent().find("#step").addClass("active");
  });
});

//faq slide down
$(document).ready(function () {
  $(".faq__content__list__item").click(function (e) {
    e.preventDefault();
    $(this).find(".faq__content__list__item__a").slideDown();
    $(this).toggleClass("active");
  });
});
// $(document).ready(function () {
//   $(".faq__content__list .faq__content__list__item").click(function (e) {
//     e.preventDefault();
//     $(this).find(".faq__content__list__item__a").slideToggle();
//     $(this).toggleClass("active");
//   });
// });


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
