(function($) {
  $.fn.slide = function (options) {
    var self = $(this);
    var setting={
      autoPlay:true,  //为开启自动轮播
      speed:2000,  //为轮播间隔时间（）
    }
    if (options) {
      $.extend(setting, options);
    }
    var slideBt = true;         //slideBt=true为开启滚动按钮


    var slideNub;               //轮播图片数量

      $(this).height($(this).width()*0.36);
      slideNub = $(this).find(".img").length;             //获取轮播图片数量
      for(var i=0;i<slideNub;i++){
        $(this).find(".img:eq("+i+")").attr("data-slide-imgId",i);
      }


      //根据轮播图片数量设定图片位置对应的class
      if(slideNub==1){
        for(var i=0;i<slideNub;i++){
          $(this).find(".img:eq("+i+")").addClass("img3");
        }
      }
      if(slideNub==2){
        for(var i=0;i<slideNub;i++){
          $(this).find(".img:eq("+i+")").addClass("img"+(i+3));
        }
      }
      if(slideNub==3){
        for(var i=0;i<slideNub;i++){
          $(this).find(".img:eq("+i+")").addClass("img"+(i+2));
        }
      }
      if(slideNub>3&&slideNub<6){
        for(var i=0;i<slideNub;i++){
          $(this).find(".img:eq("+i+")").addClass("img"+(i+1));
        }
      }
      if(slideNub>=6){
        for(var i=0;i<slideNub;i++){
          if(i<5){
            $(this).find(".img:eq("+i+")").addClass("img"+(i+1));
          }else{
            $(this).find(".img:eq("+i+")").addClass("img5");
          }
        }
      }


      //根据轮播图片数量设定轮播图按钮数量
    if(options.focusPoint){
      var focusPoint = options.focusPoint
      if(slideBt){
        for(var i=1;i<=slideNub;i++){
          $(focusPoint).append("<span data-focus-index='"+i+"'></span>");
        }
        $(focusPoint).width(slideNub*34);
        $(focusPoint).css("margin-left","-"+slideNub*17+"px");
      }
    }


      var interval;
      //自动轮播
    autoPlay()
    function autoPlay() {
      if(setting.autoPlay){
        interval = setInterval(function(){
          left();
        }, setting.speed);
      }

    }


    self.parent().on("mouseenter",function () {
      if(interval){
        clearInterval(interval)
      }
    });
    self.parent().on("mouseleave",function () {
      autoPlay()
    });

      // self.on("mouse")
      slideLi();
      // imgClickFy();





    //轮播图片左右图片点击翻页
    function imgClickFy(){
      self.find(".img").removeAttr("onclick");
      self.find(".img2").addClass("prevBtn");
      self.find(".img4").addClass("nextBtn");
    }
    $(".prevBtn").click(function () {
      right()
    });
    $(".nextBtn").click(function () {

      left()
    });
    //右滑动

    function right(){
      var fy = new Array();
      for(var i=0;i<slideNub;i++){
        fy[i]=self.find(".img[data-slide-imgId="+i+"]").attr("class");
      }
      for(var i=0;i<slideNub;i++){
        if(i==0){
          self.find(".img[data-slide-imgId="+i+"]").attr("class",fy[slideNub-1]);
        }else{
          self.find(".img[data-slide-imgId="+i+"]").attr("class",fy[i-1]);
        }
      }
      // imgClickFy();
      slideLi();
    }


    //左滑动
    function left(){
      var fy = new Array();
      for(var i=0;i<slideNub;i++){
        fy[i]=self.find(".img[data-slide-imgId="+i+"]").attr("class");
      }
      for(var i=0;i<slideNub;i++){
        if(i==(slideNub-1)){
          self.find(".img[data-slide-imgId="+i+"]").attr("class",fy[0]);
        }else{
          self.find(".img[data-slide-imgId="+i+"]").attr("class",fy[i+1]);
        }
      }
      // imgClickFy();
      slideLi();
    }

    //修改当前最中间图片对应按钮选中状态
    function slideLi(){
      var slideList = parseInt(self.find(".img3").attr("data-slide-imgId")) + 1;
      if(options.focusPoint){
        $(options.focusPoint).find("span").removeClass("on");
        $(options.focusPoint).find(" span[data-focus-index="+slideList+"]").addClass("on");
      }

    }


    //轮播按钮点击翻页
    $(options.focusPoint).on("click",'span',function () {
      var id =$(this).data('focus-index')
      var tzcs = id - (parseInt(self.find(".img3").attr("data-slide-imgId")) + 1);
      if(tzcs>0){
        for(var i=0;i<tzcs;i++){
          setTimeout(function(){
            right();
          },1);
        }
      }
      if(tzcs<0){
        tzcs=(-tzcs);
        for(var i=0;i<tzcs;i++){
          setTimeout(function(){
            left();
          },1);
        }
      }
      slideLi();
    });


  }
})(jQuery);
