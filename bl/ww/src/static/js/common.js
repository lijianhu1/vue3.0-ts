/*jshint esversion: 6 */

/* 产品系列信息，sweep:扫地机，windon:擦窗机；根据产品id跳转至详情 */
const productNav = {
  sweep: [{
    title: "8系列",
    msg: "扫拖一体，不留死角",
    list: [{
        name: 'BL826',
        id: 'BL826',
      }, {
        name: 'BL809',
        id: 'BL809',
      }, {
        name: 'BL801',
        id: 'BL801',
      }, {
        name: 'BL800',
        id: 'BL800',
      }
      /*, {
              name: 'BL802',
              id: 'BL802',
            }, {
              name: 'BL820',
              id: 'BL820',
            }*/
    ]
  }, {
    title: "7系列",
    msg: "随心预约，满足多样需求",
    list: [{
      name: 'BL701黑',
      id: 'BL701-b',
    }, {
      name: 'BL701白',
      id: 'BL701-w',
    }]
  }, {
    title: "6系列",
    msg: "智能感应，再也不怕萌宠毛发遍布",
    list: [{
      name: 'BL602',
      id: 'BL602',
    }, {
      name: 'BL608',
      id: 'BL608',
    }, {
      name: 'BL618',
      id: 'BL618',
    }]
  }, {
    title: "5系列",
    msg: "简约设计 智能生活",
    list: [{
      name: 'BL517',
      id: 'BL517',
    }]
  }, {
    title: "1系列",
    msg: "高效清洁，性价比高",
    list: [{
      name: 'BL102',
      id: 'BL102',
    }, {
      name: 'BL105',
      id: 'BL105',
    }]
  }, {
    title: "K系列",
    msg: "省时省电，迷你超薄",
    list: [{
      name: 'K5',
      id: 'K5',
    }, {
      name: 'K5A',
      id: 'K5A',
    }]
  }],
  window: [{
    title: '擦窗机系列',
    msg: "路径记忆，断点续洁",
    list: [{
      name: 'CC906',
      id: 'CC906',
    }, {
      name: 'CC901',
      id: 'CC901',
    }]
  }]
};

/* 生产产品导航，主要用于头部产品导航和产品页面 */
$.fn.productNav = function () {
  let productNavHtml = ``;
  for (let key in productNav) {
    productNavHtml += `<div class="product-item ${key==='sweep'?'active':''}"><ul class="list">`;
    for (let i = 0; i < productNav[key].length; i++) {
      const item = productNav[key][i];
      const colum = Math.ceil(productNav[key].length / 3);
      productNavHtml += `<li class="list-item ${(i+1)%3===0?'not-bor-r':''} ${i-3*(colum-1)>=0?'not-bor-b':''}"><div class="list-item-wrap">
        <h5 class="item-title">${item.title}</h5><p class="item-msg">${item.msg}</p>`;
      for (let j = 0; j < item.list.length; j++) {
        productNavHtml += `<div class="${j===0?'cell active':'cell'}">
                        <a href="./product_detail.html?type=${item.list[j].id}">${item.list[j].name}</a>
                        <div class="img-wrap"><img src="./static/images/product/top/${item.list[j].id}_298.png" onerror=src="http://placehold.it/140x140" alt="宝乐扫地机"></div>
                      </div>`;
      }
      productNavHtml += `</div></li>`;
    }
    productNavHtml += `</ul></div>`;
  }
  return productNavHtml;
};

$("#nav .product-tab .main-wrap").html($.fn.productNav());
$(".product-nav a").on("mouseover", function () {
  const index = $(this).data("index");
  $(this).parents(".product-nav").find("a").removeClass("active");
  $(this).addClass("active");
  $(this).parent().parent().next(".product-tab").find(".product-item").removeClass("active").eq(index).addClass("active");
});
$(".product-tab ").on("mouseover", ".cell a", function () {
  $(this).parent().addClass("active").siblings(".cell").removeClass("active");
});

// 20191014 注释
// if (navigator.appName === "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") === "MSIE8.0") {
//   window.attachEvent('onscroll', function () {
//     scrollSubNav();
//   });
// } else {
//   document.addEventListener('scroll', function (event) {
//     scrollSubNav();
//   });
// }
// function scrollSubNav() {
//   const subNav = $(".index-nav");
//   let scrollDistance = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
//   if (subNav.length > 0) {
//     if (scrollDistance >= 250) { // 触发的位置
//       subNav.addClass("fixed");
//     } else {
//       subNav.removeClass("fixed");
//     }
//   }
// }
// scrollSubNav();

/* 频幕小于1200时 */
/* mobile菜单 */

$("#header .mobile .menu-btn").on("click",function () {
  if ($("#header").hasClass('show')){
    $("#header").removeClass("show");
    $("body").css("overflow","auto");
    $("video").show()
  }else {
    $("#header").addClass("show");
    $("body").css("overflow","hidden");
    $("video").hide()
  }
});

$("#header .mobile .menu-nav-wrap").on("click",function () {
  var parent = $(this).parent('.menu-nav-item');
  if(parent.hasClass('active')){
    parent.removeClass('active');
  }else {
    parent.addClass('active');
  }
  parent.siblings().removeClass('active');
});
