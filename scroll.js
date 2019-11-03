$(".about").on("click", function() {
  $("body, html").animate(
    {
      scrollTop: $(".about-me").offset().top
    },
    800
  );
});

$(".contact").on("click", function() {
  $("body, html").animate(
    {
      scrollTop: $(".cont").offset().top
    },
    800
  );
});
