/*jshint esversion: 6 */
const tool = {
  //服务地址
  serviceUrl:"http://172.16.1.42:9033",


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
    config.data.lang = config.data.lang||'zh-CN';
    $.ajax({
      url: tool.serviceUrl + config.url,
      type: config.type,
      data: param.data,
      cache: false,
      success: config.success,
      error: config.error
    });


  },


  //获取url中的参数
  url: {
    get(name,type='search') {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
      var r = window.location[type].substr(1).match(reg); //匹配目标参数
      if (r != null) return unescape(r[2]);
      return null; //返回参数值
    },
  },
  newsHtmlFilter(html){
    return $.trim(html.replace(/<[^<>]+>/g, "").replace(/&nbsp;/g,""));
  },

  formatDate: function(date, format) {
    if(!date || new Date(date) == 'Invalid Date') return false;
    format = format || "yyyy/MM/dd hh:mm:ss";
    date = date || new Date();
    if(typeof date == "string") date = new Date(Date.parse(date.replace(/-/g, "/"))); //Safari不支持 2017-01-01的格式
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
    if(/(y+)/.test(format)) format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for(var k in o)
      if(new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
          RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    return format;
  },
};
const ajaxService = {
  indexNews(data, success) {
    tool.ajax({
      url: "/cp/news/index",
      data: data,
      success,
    });
  },
  bannerList(data,success) {
    tool.ajax({
      url: "/cp/banner/list",
      data,
      success,
    });
  },
  newsDetail(data, success) {
    tool.ajax({
      url: "/cp/news/detail",
      data,
      type: "get",
      success,
    });
  },
  newsList(data, success) {
    tool.ajax({
      url: "/cp/news/list",
      data,
      success,
    });
  },

};

