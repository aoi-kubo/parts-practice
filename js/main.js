$(function() {
  // // スクロール
  // var $doc = $(document),
  //       $win = $(window),
  //       $svg = $('svg').drawsvg(),
  //       max = $doc.height() - $win.height();
  
  //       $win.on('scroll', function() {
  //         var p = $win.scrollTop() / max;
  //         $svg.drawsvg('progress', p);
  //       });

  // animation
  var $svg = $('svg').drawsvg({
    // 秒数指定
    duration: 2000
  });
  $svg.drawsvg('animate');

  // $(window).scroll(function () { 

  //   //スクロールした値
  //   let scrollValue = $(window).scrollTop();
  //   let wh = $(window).height();
  //   var $svg = $('svg').drawsvg({
  //     // 秒数指定
  //     duration: 2000
  //   });
  //   //処理が起こる位置
  //   let triggerPoint = $(".slide-trigger").offset().top - wh / 2;
  //   if (scrollValue > triggerPoint) {
  //     $svg.drawsvg('animate');
  //   } 
  // });


  

});


