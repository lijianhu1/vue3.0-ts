/*jshint esversion: 6 */
const tool = {
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
  },
  compare (prop) {
    return function (obj1, obj2) {
      var val1 = obj1[prop];
      var val2 = obj2[prop];
      if (val1 < val2) {
        return -1;
      } else if (val1 >val2) {
        return 1;
      } else {
        return 0;
      }
    }
  }

};
