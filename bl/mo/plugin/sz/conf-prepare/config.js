const path = require('path');
const config={};
config.basePath=''; // /keyu/www
config.env='development';    //production  development
config.apiHost='http://pc-sz-prep.robotbona.com';    ///svn版本
// pc-sz-prep.robotbona.com
// pc-us-prep.robotbona.com

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
config.area='sz';    /// sz, us
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