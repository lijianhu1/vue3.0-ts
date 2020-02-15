const Promise = require('bluebird');
const request = Promise.promisifyAll(require("request"));
const co = require('co');
const qs = require("querystring");
const config = require("../include/config")

const METHOD_POST='POST'
const METHOD_GET='GET'

// class
function ApiServe(opts) {}

// req options
ApiServe.prototype.options=(path, method, form)=> {
  let opts={
    headers: {
      'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
      // 'Accept-Language': 'zh-CN',
      // 'Accept-Encoding': 'unzip',
      // 'Accept': 'application/json',
      'Connection': 'close',
    }
  }
  if (method === METHOD_GET) {
    if (path.indexOf('?') !== -1) {
      path = path + "&" + qs.stringify(form)
    } else {
      path = path + "?" + qs.stringify(form)
    }
    opts.url=config.apiHost+path;
  } else {
    opts.url=config.apiHost+path;
    opts.form=form;
  }

  console.log(path)
  if(opts.form) console.log(JSON.stringify(opts.form))
  return opts;
}
// req options
ApiServe.prototype.parse=(res)=>{
  if (res.statusCode === 200) {
    // var body = res.body;
    console.log(res.request['uri'].path)
    console.log(res.body)
    try {
      return JSON.parse(res.body);
    }
    catch (e) {
      // TODO: data error log
      console.log(e)
    }
  } else {
    // TODO: network error log
    console.log(res.statusCode)
    console.log(res.body)
  }
  return null
}

// base method
ApiServe.prototype.serve=co.wrap(function *(path, method, form) {
  let res;
  if(method===METHOD_POST) {
    let options = this.options(path, METHOD_POST, form);
    res = yield request.postAsync(options);
  } else {
    let options = this.options(path, METHOD_GET, form);
    res = yield request.getAsync(options);
  }
  return this.parse(res)
})


// base method get
ApiServe.prototype.get=co.wrap(function *(path, form) {
  return yield this.serve(path, METHOD_GET, form);
})

// base method post
ApiServe.prototype.post=co.wrap(function *(path, form) {
  return yield this.serve(path, METHOD_POST, form);
})

// category list
ApiServe.prototype.categoryList=co.wrap(function *(form) {
  return this.get('/cp/category/list',form)
})

// news sticky
ApiServe.prototype.newsSticky=co.wrap(function *(form) {
  return this.get('/cp/news/sticky',form)
})

// news list
ApiServe.prototype.newsList=co.wrap(function *(form) {
  return this.get('/cp/news/list',form)
})

// news list
ApiServe.prototype.newsDetail=co.wrap(function *(form) {
  return this.get('/cp/news/detail',form)
})

// 详情内容
ApiServe.prototype.aboutDetail=co.wrap(function *(form) {
  let cpNewsDetail = yield request.getAsync(this.options('/cp/news/detail', METHOD_GET, form));
  let cpCategoryList = yield request.getAsync(this.options('/cp/category/list', METHOD_GET));
  let cpNewsSticky = yield request.getAsync(this.options('/cp/news/sticky', METHOD_GET))

  let result = {}
  result.cpNewsDetail=this.parse(cpNewsDetail)
  result.cpCategoryList=this.parse(cpCategoryList)
  result.cpNewsSticky=this.parse(cpNewsSticky)
  return result;
})

/// index
ApiServe.prototype.indexData = co.wrap(function *(form) {
  let cpNewsIndex = yield request.getAsync(this.options('/cp/news/index', METHOD_GET, form));
  let cpBannerList = yield request.getAsync(this.options('/cp/banner/list', METHOD_GET, form));
  let result = {}
  result.cpNewsIndex=this.parse(cpNewsIndex)
  result.cpBannerList=this.parse(cpBannerList)
  return result;
})

module.exports = function (opts) {
  return new ApiServe(opts)
};