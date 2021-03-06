/*jshint esversion: 6 */
$(function () {

  //获取首页新闻数据
  function getNewsList() {
    ajaxService.indexNews({
      num: 4,
      lang: 'zh-CN'
    }, function (res) {
      if (res.code == 0) {
        // 新闻条数小于2则删除新闻中心
        if (res.data.length < 2) {
          $('.news-wrap').remove();
        } else {
          let html = "";
          for (let i = 0; i < res.data.length; i++) {
            var item = res.data[i];
            var brief = item.brief;
            if (brief && brief.length > 57) {
              brief = brief.slice(0, 57) + '...';
            }
            let date = item.update_at&&item.update_at.split(" ")[0].substr(5,5);
            html += `<a class="swiper-slide news-item ${i%2 === 0 ? 'fl':'fr'}" target=_blank href="/cn/about_newsdetail.html?id=${item.id}">
            <div class="news-item-img"><image src="${item.image}" /></div>
            <div class="news-item-text"><h4 title="${item.title}">${item.title}</h4><p class="news-item-brief">${brief}</p>
            </div> <span class="news-item-date">${date}</span></a>`;
          }
          $('.news-main .swiper-wrapper').html(html);
          if (tool.myBrowser() == 8) {
            $('.news-main .news-item').each(function () {
              var titleDom = $(this).find('h4');
              var text = titleDom.text();
              if (text.length > 24) {
                titleDom.text(text.slice(0, 24) + '...');
              }
            });
          }
          //轮播图
          var newsSwiper = new Swiper('.news-main-wrap', {
            autoplay: 5000, //可选选项，自动滑动
            speed: 500,
            loop: true,
            calculateHeight: true,
            autoplayDisableOnInteraction: false,
            swipeToNext: false,
            swipeToPrev: false,
            // wrapperClass: 'news-wrapper',
            slidesPerView: 2,
            slidesPerGroup: 2,
          });

          $('.news-main .prev .arrow').click(function () {
            newsSwiper.swipePrev();
          });
          $('.news-main .next .arrow').click(function () {
            newsSwiper.swipeNext();
          });
        }
      }
    });
  }



  //轮播图数据

  function getBanner() {
    ajaxService.bannerList({
      pageSize: 10
    }, function (res) {
      if (res.code == 0) {
        let html = "";
        for (let i = 0; i < res.data.length; i++) {
          let item = res.data[i];
          // html+=`<a href="${item.link_to||'javascript:;'}" class="item"><img src="${item.image}" alt=""></a>`;
          html += `<a href="${item.link_to||'javascript:;'}" target="${item.link_to?'_blank':''}" class="${item.link_to?'item swiper-slide':'swiper-slide item default'}">
           <span class="img" data-url="${item.image}" style="background: url('${item.image}') no-repeat center;filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${item.image}',sizingMethod='scale')"></span>
           </a>`;
        }
        $('.swiper-wrapper').html(html);
        if(tool.myBrowser()==8){
          $('.swiper-wrapper .item').each(function () {
            const url = $(this).children('.img').data('url');
            $(this).children('.img').css('filter',`progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${url}',sizingMethod='scale')`)
          });
        }
        //轮播图
        var swiper = new Swiper('.swiper-container', {
          autoplay: res.data.length.length > 1 ? 5000 : false, //可选选项，自动滑动
          speed: 500,
          loop: true,
          calculateHeight: true,
          autoplayDisableOnInteraction: false,
          pagination: '.pagination',
          paginationClickable: true,
          swipeToNext: false,
          swipeToPrev: false,
          // cssWidthAndHeight:'height'
        });
        $('.swiper-container .prev').click(function () {
          swiper.swipePrev();
        });
        $('.swiper-container .next').click(function () {
          swiper.swipeNext();
        });
      }
    });
  }



  // //画刊事件
/*  $('.pictorial-item').on({
    mouseover: function (e) {
      e.stopPropagation();
      $('.pictorial-wrap').removeClass('item-active');
      $(this).parent().addClass('item-active').parent().addClass('active');

    },
    mouseleave: function () {
      $('.pictorial-wrap').removeClass('item-active');
      $('.pictorial').removeClass('active');
    }
  });*/


  getBanner();
  getNewsList();
});
