/*jshint esversion: 6 */
$(function ($) {

  // 发展历程，根据鼠标hover获取该年所有历程列表，再根据具体索引组成图片地址。
  $.EvList = function (options) {
    let _index = 0;
    let timer;
    const timeFun = function () {
      // _index++;
      if (_index >= $('.ev-list .item-desc').length) {
        _index = 0;
      }
      activeItem(_index);
    };

    function updateDom(year) {
      _index = 0;

      $('.stage-con .item-year').text(year);
      let evList = ``;
      for (let i in options.list[year]) {
        const item = options.list[year][i];
        evList += `<p class="item-desc">${item.text}</p>`;
      }
      $('.ev-list').html(evList);
      $('.ev-img').attr("src", `${options.imgUrl}/${year}_0.jpg`);
      $('.ev-list .item-desc').eq(0).css('color', '#333');
      if ($('.ev-list .item-desc').length > 1) {

        // timer = setInterval(() => {
          timeFun();
        // }, 3000);
      }

    }

    function init() {

      updateDom(options.initYear);
      $('.stage .stage-date .stage-focus').on("mouseenter", function () {
        clearInterval(timer);
        const year = $(this).text();
        $('.stage-date .stage-focus').removeClass('active');
        $(this).addClass('active');
        updateDom(year);
      });
      $('.stage-con .ev-list ').on("mouseenter", ".item-desc", function () {
        clearInterval(timer);
        const index = $(this).index();
        _index = index;
        activeItem(index);
      });
      $('.stage-con .ev-list').on('mouseleave', ".item-desc", function () {
        const len = $('.ev-list .item-desc').length;
        if (len > 1) {
          // timer = setInterval(() => {
            timeFun();
          // }, 3000);
        }
      });
    }
    init();

    function activeItem(index) {
      const year = $(".stage-date .active").text();
      $(".ev-img").attr("src", `${options.imgUrl}/${year}_${index}.jpg`);
      const itemDescLen = $('.ev-list .item-desc').length;
      $('.ev-list .item-desc').eq(index).css('color', '#333');
      if (itemDescLen > 1) {
        $('.ev-list .item-desc').eq(index).siblings().css('color', '#999');
      }
    }


  };
});
