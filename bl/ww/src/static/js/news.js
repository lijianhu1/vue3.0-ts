/*jshint esversion: 6 */
$(function () {

  //获取新闻列表
  function newsList(page = 1, category="") {
    let reqdata = {
      cuPage: page,
      pageSize: 10,
      lang: "zh-CN",
      category
    };
    ajaxService.newsList(reqdata, (res) => {
      if (res.code == 0) {
        let html = "";

        for (let i = 0; i < res.data.length; i++) {
          const _date = res.data[i].published_at.split(' ')[0];
          let title = res.data[i].title;
          if (title.length > 41) {  //大于41个字时显示。。。
            title = title.slice(0, 41) + '...';
          }
          html += `<a href="/cn/about_newsdetail.html?id=${res.data[i].id}" class="news-item ${i%2==1?'bl-mr0':''}">
          <img src="${res.data[i].image}" class="news-item-img" alt="宝乐新闻">
          <div class="news-item-title" title="${res.data[i].title}">${title}</div>
          <div class="news-item-time">${_date}</div>
        </a>`;
        }

        $(".news-list").html(html);
        //置顶
        document.documentElement.scrollTop = 0;
        //设置分页
        let pageCount = Math.ceil(res.page.count / res.page.pageSize);
        if (pageCount > 1) {
          $(".pagination-box").unbind().createPage({
            pageCount: Math.ceil(res.page.count / res.page.pageSize),
            current: res.page.cuPage,
            backFn: function (page) {
              const category = tool.url.get("category");
              let url = `?cuPage=${page}`;
              if(category){
                url+=`&category=${category}`;
              }
              window.location.search = url;
            }
          });
          $(".pagination-box").addClass('borderTop');
        }
      }
    });
  }
  let page = tool.url.get("cuPage") || 1;
  const category = tool.url.get("category");
  newsList(page, category);

  //新闻分类
  function getCategoryList() {
    ajaxService.categoryList(function (res) {
      if (res.code == 0) {
        let list = `<li><a href="javascript:;">所有新闻</a></li>`;
        for (let i = 0; i < res.data.length; i++) {
          list += `<li><a href="javascript:;" data-id="${res.data[i].id}">${res.data[i].title}</a></li>`;
        }
        $('.news-cen-list').html(list);
      }
    });
    $('.news-cen-list').on("click", 'a', function () {
      let url =`/cn/about_news.html?cuPage=1`;
      const id = $(this).data('id');
      if (id){
        url+=`&category=${id}`;
      }
      window.location.href = url;
    });
  }
  getCategoryList();
  //新闻推荐
  function getStickyList() {
    ajaxService.stickyList({
      pageSize: 10
    }, function (res) {
      if (res.code == 0) {
        let list = ``;
        for (let i = 0; i < res.data.length; i++) {
          list += `<a href="/cn/about_newsdetail.html?id=${res.data[i].id}">${res.data[i].sticky_title}</a>`;
        }
        $('.news-recommend-list').html(list);
      }
    });
  }
  getStickyList();
});
