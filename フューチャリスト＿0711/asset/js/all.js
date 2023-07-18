// $(document).ready(function () {
//   $(".faq__content__list__item").on("click", function () {
//       $(".faq__content__list__item").removeClass("active"),
//       $(this).addClass("active");
//   });
// });

//入塾までの流れについてに戻る
$(document).ready(function() {
  $("#toStep").on("click", function() {
    $("html, body").animate({
      scrollTop: $("#step").offset().top - 100
    }, 500);
   $(this).parent().parent().parent().parent().find("#step .faq__content__list__item__a").slideDown(1000);
  });
});

//faq slide down
$(document).ready(function () {
  $(".faq__content__list--active .faq__content__list__item").click(function (e) { 
    e.preventDefault();
   $(this).find(".faq__content__list__item__a").slideToggle();
   $(this).siblings().find(".faq__content__list__item__a").slideUp();
   $(this).parent().siblings().find(".faq__content__list__item__a").slideUp();
   $(this).addClass(active);
  }); 
});
$(document).ready(function () {
  $(".faq__content__list .faq__content__list__item").click(function (e) { 
    e.preventDefault();
   $(this).find(".faq__content__list__item__a").slideToggle();
  }); 
});
$(document).ready(function () {
  $(".faq__content__list__item").on("click", function () {
      $(".faq__content__list__item").removeClass("active"),
      $(this).addClass("active");
  });
});



