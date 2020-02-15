import axios from 'axios'
import jsEncrypt from 'jsencrypt';
import ajax from '../service/ajax';
export default {
  ajax(param) {
    let ajax;
    let config = {
      url: '/api' + param.url, //请求url
      data: param.data || {}, //请求参数
      type: param.type || 'post', //请求方式，默认为post
      success: param.success, //请求成功回调函数
      error: param.error, //请求失败回调函数
    }
    if (!config.url) {
      alert('url required');
      return
    }
    axios.defaults.headers.csrfToken = this.cookie.get('csrfToken');
    if (config.type.toUpperCase() == 'POST') {
      ajax = axios.post(config.url, config.data);
      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    } else {
      ajax = axios.get(config.url, {params: config.data});
    }
    ajax.then(response => {
      if (typeof config.success === "function") {
        config.success(response.data);
      }
    }).catch(error => {
      config.error(error);
    })
  },
  cookie: {
    set: function(name, value, flag) {
      var Days = 30;
      var exp = new Date();
      exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
      if(flag == true) {
        document.cookie = name + "=" + window.escape(value);
        return;
      }
      document.cookie = name + "=" + window.escape(value) + ";expires=" + exp.toGMTString() + "; path=/";
    },
    get: function(name) {
      var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
      if(arr !== null) {
        return window.unescape(arr[2]);
      }
      return null;
    },
    del: function(name) {
      var exp = new Date();
      exp.setTime(exp.getTime() - 1);
      var cval = cookie.get(name);
      if(cval !== null) {
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
      }
    }
  },

  JSEncrypt(password) {
    return new Promise((resolve, reject) =>{
      ajax.getPublicKey(res=>{
        const encrypt = new JSEncrypt();
        encrypt.setPublicKey(res.data);
        if(res.code===200){
          resolve(encrypt.encrypt(password));
        }else {
          reject('公钥获取失败')
        }

      })
    })

  },
  //处理时间格式
  formatDate(date, format) {
		if(!date || new Date(date) == 'Invalid Date') return false;
		format = format || "yyyy/MM/dd hh:mm:ss";
		date = date || new Date();
		if(typeof date == "string") date = new Date(Date.parse(date.replace(/-/g, "/"))); //Safari不支持 2017-01-01的格式
		//if(typeof date == "string") date = new Date(date);
		const o = {
			"M+": date.getMonth() + 1, //month
			"d+": date.getDate(), //day
			"h+": date.getHours(), //hour
			"m+": date.getMinutes(), //minute
			"s+": date.getSeconds(), //second
			"q+": Math.floor((date.getMonth() + 3) / 3), //quarter
			"S": date.getMilliseconds() //millisecond
		}
		if(/(y+)/.test(format)) format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
		for(var k in o)
			if(new RegExp("(" + k + ")").test(format))
				format = format.replace(RegExp.$1,
					RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
		return format;
	},

}
