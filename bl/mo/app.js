const express = require('express');
const path = require('path');
const fs = require('fs');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const striptags = require('striptags');
const lessMiddleware = require('less-middleware');

const config = require('./include/config');
const proxy = require('./include/proxy');

const app = express();

proxy(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//配置less
app.use(lessMiddleware('/less', config.less.options));

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public','img','logo.ico')));

// app.use(logger('dev'));
let accessLog = fs.createWriteStream(__dirname+'/logs/access.log', {flags: 'a',
  encoding: 'utf8',
  fd: null,
  mode: '0666',
  autoClose: true
});
app.use(logger('combined', {stream: accessLog}));      //打印到log日志

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 公共方法
// app.use(common.activeUrl);
app.use(function (req, res, next) {
  res.locals.serve = {
    redirect:config.redirect.pc[config.area],
    links:config.redirect.mobi.links,
    reqPath:req.path,
    basePath:config.basePath,
    staticPath:config.staticPath,
    striptags:striptags,
    env:config.env,
    stc:config.stc
  };
  next();
});

const index = require('./routes/index');
const users = require('./routes/users');
const product = require('./routes/product');
const en = require('./routes/en');

app.use('/', index);
app.use('/users', users);
app.use('/product', product);
app.use('/en', en);

app.get('/status-test', function(req, res, next) {res.send({id:Math.random(),stc:config.stc})});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
