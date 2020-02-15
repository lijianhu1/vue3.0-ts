// proxy.js
const proxy = require('http-proxy-middleware');
const config=require('./config')

// https://github.com/chimurai/http-proxy-middleware
// proxy middleware options
const options = {
  target: config.apiHost, // target host
  changeOrigin: true, // needed for virtual hosted sites
  // ws: true, // proxy websockets
  pathRewrite: {
    '^/api': '/', // rewrite path
  },
  // router: {
  //   // when request.headers.host == 'dev.localhost:3000',
  //   // override target 'http://www.example.org' to 'http://localhost:8000'
  //   'localhost:9036': 'http://localhost:9033'
  // }
};

module.exports = app => {
  app.use('/api/*', proxy(options));
};

// // 设置代理
// app.use('/jygoods-api', proxy({
//   target: 'https://m.jyall.com',
//   changeOrigin: true
// }));


// var proxy = require('http-proxy-middleware');//引入nodejs的反向代理模块
// // proxy middleware options
// var options = {
//   target: 'http://127.0.0.1:9090', // target host
//   changeOrigin: true,               // needed for virtual hosted sites
// };
// // create the proxy (without context)
// var exampleProxy = proxy('/api-sso/*',options);
// app.use(exampleProxy);
