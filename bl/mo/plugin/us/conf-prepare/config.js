const path = require('path');
const config={};
config.basePath=''; // /keyu/www
config.env='development';    //production  development
config.apiHost='http://pc-us-prep.robotbona.com';    ///svn版本

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

config.startServe={
  port: 9036,
  timeout: 90*1000  //ms
}
config.area='us';    /// sz, us
config.redirect={
  mobi:{
    sz:'index',
    us:'/en/index',
    links:{
      shop:'#',
    }
  },
  pc:{
    sz:'http://www.robotbona.com/cn/index.html',
    us:'http://www.robotbona.com/en/index.html',
    links:{
      shop:'#',
    }
  }
};

config.stc='45';    ///svn版本
config.staticPath=config.basePath+'/static';    ///svn版本
module.exports = config;