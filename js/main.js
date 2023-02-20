$(function () {
  $(".wrapper").hover(
    function () {
      $(".img").addClass("mavic-away").removeClass("mavic-back");
      $(".wrapper").addClass("animation-on");
    },
    function () {
      $(".img").removeClass("mavic-away").addClass("mavic-back");
      $(".wrapper").removeClass("animation-on");
    }
  );
});
