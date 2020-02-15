/*jshint esversion: 6 */
const productNav = {
  sweep: [{
    title: "8 Series",
    msg: "Multi-function-Interchangeable Main Brush & Nozzle",
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
    title: "7 Series",
    msg: "Laser & Camera Mapping for Top Range Navigation",
    list: [{
      name: 'BL701-black',
      id: 'BL701-b',
    }, {
      name: 'BL701-white',
      id: 'BL701-w',
    }]
  }, {
    title: "6 Series",
    msg: "Large Nozzle of Golden Ratio, No Fuzz and Buzz",
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
    title: "5 Series",
    msg: "Minimalist Design，Intelligent Life",
    list: [{
      name: 'BL517',
      id: 'BL517',
    }]
  }, {
    title: "1 Series",
    msg: "High Cleaning Efficiency with Competitive cost",
    list: [{
      name: 'BL102',
      id: 'BL102',
    }, {
      name: 'BL105',
      id: 'BL105',
    }]
  }, {
    title: "K Series",
    msg: "Compact & Slim, Easy Start",
    list: [{
      name: 'K5',
      id: 'K5',
    }, {
      name: 'K5A',
      id: 'K5A',
    }]
  }],
  window: [{
    title: 'Window Cleaning Robot',
    msg: "Window cleaning robot series: Efficient Cleaning, Triple Safety Protection",
    list: [{
      name: 'CC906',
      id: 'CC906',
    }, {
      name: 'CC901',
      id: 'CC901',
    }]
  }]
};
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
                        <div class="img-wrap"><img src="./static/images/product/top/${item.list[j].id}_298.png" onerror=src="http://placehold.it/140x140" alt=""></div>
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
/* if (navigator.appName === "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") === "MSIE8.0") {
  window.attachEvent('onscroll', function () {
    scrollSubNav();
  });
} else {
  document.addEventListener('scroll', function (event) {
    scrollSubNav();
  });
}

function scrollSubNav() {
  const subNav = $(".index-nav");
  let scrollDistance = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  if (subNav.length > 0) {
    if (scrollDistance >= 250) { // 触发的位置
      subNav.addClass("fixed");
    } else {
      subNav.removeClass("fixed");
    }
  }
}
scrollSubNav(); */


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
