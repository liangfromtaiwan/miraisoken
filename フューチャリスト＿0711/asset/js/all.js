$(document).ready(function () {
  $(".faq__content__list__item").on("click", function () {
      $(".faq__content__list__item").removeClass("active"),
      $(this).addClass("active");
  });
});
