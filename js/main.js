$(function() {
  $(window).scroll(function () {
    let scrollValue = $(window).scrollTop();
    let wh = $(window).height();
    $(".slide-trigger").each(function (idx, elm) {
      let tp = $(elm).offset().top - wh / 2;
      if (scrollValue > tp) {
        $(elm).find(".slide").addClass("in");
      }
    });
  });

  $("#logo").click(function () {
    $(".first-box").addClass("active");
    $(".second-box").toggleClass("active");
  });
  

  

});


