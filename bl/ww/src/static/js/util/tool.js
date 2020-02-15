/*jshint esversion: 6 */
const tool = {
  //服务地址 由gulp根据环境生成
  // serviceUrl: "http://robotbona-dev.softbona.com", //开发线
  // serviceImgUrl: "http://testbaole.robotbona.com",


  //ajax配置
  ajax: function (param) {
    var config = {
      url: param.url, //请求url
      data: param.data || {}, //请求参数
      type: param.type || 'get', //请求方式，默认为get
      // loading: param.loading, //是否需要loading动画，默认为true
      success: param.success, //请求成功回调函数
      error: param.error, //请求失败回调函数
    };
    if (!config.url) {
      alert('url required');
      return;
    }
    config.data.lang = config.data.lang || 'zh-CN';
    $.ajax({
      url: serviceUrl + config.url,
      type: config.type,
      data: config.data,
      cache: false,
      success: config.success,
      error: config.error
    });


  },


  //获取url中的参数
  url: {
    get(name, type = 'search') {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
      var r = window.location[type].substr(1).match(reg); //匹配目标参数
      if (r != null) return unescape(r[2]);
      return null; //返回参数值
    },
  },
  newsHtmlFilter(html) {
    return $.trim(html.replace(/<[^<>]+>/g, "").replace(/&nbsp;/g, ""));
  },

  formatDate: function (date, format) {
    if (!date || new Date(date) == 'Invalid Date') return false;
    format = format || "yyyy/MM/dd hh:mm:ss";
    date = date || new Date();
    if (typeof date == "string") date = new Date(Date.parse(date.replace(/-/g, "/"))); //Safari不支持 2017-01-01的格式
    //if(typeof date == "string") date = new Date(date);
    var o = {
      "M+": date.getMonth() + 1, //month
      "d+": date.getDate(), //day
      "h+": date.getHours(), //hour
      "m+": date.getMinutes(), //minute
      "s+": date.getSeconds(), //second
      "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
      "S": date.getMilliseconds() //millisecond
    };
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
          RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    return format;
  },
  //判断浏览器版本
  myBrowser() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
    if (isIE) {
      var IE9 = 6.0;
      var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
      reIE.test(userAgent);
      var fIEVersion = parseFloat(RegExp["$1"]);
      IE9 = fIEVersion;
      return IE9;
    } //isIE end
  }
};
const ajaxService = {
  indexNews(data, success) { // 首页新闻
    tool.ajax({
      url: "/cp/news/index",
      data: data,
      success,
    });
  },
  bannerList(data, success) { //首页banner列表
    tool.ajax({
      url: "/cp/banner/list",
      data,
      success,
    });
  },
  newsDetail(data, success) { //新闻详情
    tool.ajax({
      url: "/cp/news/detail",
      data,
      type: "get",
      success,
    });
  },
  newsList(data, success) { //新闻列表
    tool.ajax({
      url: "/cp/news/list",
      data,
      success,
    });
  },
  categoryList(success) { // 新闻标签列表
    tool.ajax({
      url: "/cp/category/list",
      success,
      type: "get",
    });
  },
  // 推荐文章
  stickyList(data, success) {
    tool.ajax({
      url: "/cp/news/sticky",
      success,
      data,
      type: "get",
    });
  },
};
