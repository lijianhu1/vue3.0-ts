let config={};
const path = require("path");
config.basePath=''; // /keyu/www
config.env='development';    //production  development
config.apiHost='http://robotbona-dev.softbona.com';    ///svn版本
config.startServe={
  port: 9036,
  timeout: 900
};
config.less={
  options:{
    dest: '/static/css',
    pathRoot: path.join(__dirname, '/../public'),
    render: {
      compress: "auto"
    },
    force: true,
    once: false,
    debug: false
  }
}
// en.coayu.com    科语生产英语官司
// m-en.coayu.com  科语生产手机英语官司
config.area='sz';    /// sz, us
config.redirect={
  mobi:{
    sz:'/index',
    us:'/en/index',
    links:{
      shop:'http://sp-h5-dev.softbona.com/lf/baole/index',
    }
  },
  pc:{
    sz:'http://www.robotbona.com/cn/index.html',
    us:'http://www.robotbona.com/en/index.html',
    links:{
      shop:'http://shoppc-dev.softbona.com/lf/baole/index',
    }
  }
};

// 新增域名 shopm-us.softbona.com
// config.redirect={
//   mobi:{
//     sz:'http://m.coayu.com',
//     us:'http://m-us.coayu.com/en/index',
//     links:{
//       shop:'http://shop-us.coayu.com/coayu-robot/baole/index',
//     }
//   },
//   pc:{
//     sz:'http://www.coayu.com',
//     us:'http://us.coayu.com/en/index',
//     links:{
//       shop:'http://shoppc-us.coayu.com/coayu-robot/baole/index',
//     }
//   }
// };
config.stc='45';    ///svn版本
config.staticPath=config.basePath+'/static';    ///svn版本
module.exports = config;
