const gulp = require('gulp'),
  bs = require('browser-sync').create(), //浏览器刷新
  bsReload = bs.reload,
  less = require('gulp-less'), //less编译
  cached = require('gulp-cached'), //文件修改缓存
  sourcemaps = require('gulp-sourcemaps'), //调试less
  autoprefixer = require('gulp-autoprefixer'), //浏览器兼容前缀
  jshint = require('gulp-jshint'), //js代码规范检查m
  lessLint = require('gulp-lesshint'), //less代码规范检查
  path = require('path'),
  cssmin = require('gulp-clean-css'), //压缩css
  fileinclude = require('gulp-file-include'), //复用模板
  uglify = require('gulp-uglify'), //压缩JS
  clean = require('gulp-clean'), //清空组件
  resolvePath = require("gulp-resolve-path"),
  replace = require('gulp-replace'), //重命名替换
  rev = require('gulp-rev'), //更改版本名
  revCollector = require('gulp-rev-collector'), //gulp-rev的插件，用于html文件更改引用路径;
  runSequence = require('run-sequence'), //同步插件
  gulpIf = require('gulp-if'),
  babel = require("gulp-babel"), //es6编译
  minimist = require("minimist"); //命令行参数解析
const fs = require('fs');

const knownOptions = {
  string: 'dir',
  default: {
    dir: 'dist',
    src: "src"
  }
};
const config = {};
const options = minimist(process.argv.slice(2));
if (options.NODE_ENV === 'prod' && options.lang === 'cn') { // 英文生产环境
  Object.assign(config, require('./gulpfile_prod_cn'));
} else if (options.NODE_ENV === 'prod' && options.lang === 'en') { // 中文生产环境
  Object.assign(config, require('./gulpfile_prod_en'));
} else if (options.NODE_ENV === 'dev' && options.lang === 'en') { // 英文开发环境
  Object.assign(config, require('./gulpfile_dev_en'));
} else {
  Object.assign(config, require('./gulpfile_dev_cn'));
}

const {
  srcPath,
  pathName,
  rePathName,
  dest,
} = {
  ...config
};
const writeServiceUrl = async () => { // 根据配置环境生成接口请求地址
  const filePath = path.join(srcPath, 'static/js/util/serviceUrl.js');
  const serviceData = `var serviceUrl = "${config.serviceUrl}"`;
  fs.writeFileSync(filePath, serviceData);


  // const serviceUrl = `serviceUrl:"${config.serviceUrl}"`;
  // let filePath = path.join(config.srcPath, 'static/js/util/tool.js');
  // const reg = new RegExp(/serviceUrl:\s*[",']https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*[',"]/i);
  // try {
  //   const fileData = fs.readFileSync(filePath, 'utf8');
  //   const editData = fileData.toString().replace(reg, serviceUrl);
  //   fs.writeFileSync(filePath, editData)
  // } catch (err) {
  //   throw err
  // }

};


writeServiceUrl();

//
gulp.task('less', () => {
  return gulp.src(srcPath + '/less/**/*.less')
    .pipe(sourcemaps.init())
    .pipe(cached('less')) //缓存不修改的文件
    .pipe(less({
      outputStyle: 'expanded'
    }))
    .pipe(sourcemaps.write({
      includeContent: true
    }))
    /*.pipe(autoprefixer({
      browsers: ['last 2 versions', 'Android >= 4.0',"Firefox > 20"],
      cascade: true, //是否美化属性值
      remove:true //是否去掉不必要的前缀
    }))*/
    .pipe(autoprefixer(['last 2 versions', 'Android >= 4.0', "Firefox > 20"]))
    .pipe(replace(`/${config.src}/`, rePathName))
    .pipe(gulp.dest(dest + "/static/css"))
    .pipe(bs.reload({
      stream: true
    })); //异步加载样式,不刷新浏览器
});

gulp.task('lessPro', () => {
  return gulp.src(srcPath + '/less/**/*.less')
    .pipe(sourcemaps.init())
    .pipe(cached('less')) //缓存不修改的文件
    .pipe(less({
      outputStyle: 'expanded'
    }))
    .pipe(sourcemaps.write({
      includeContent: true
    }))
    .pipe(autoprefixer(['last 2 versions', 'Android >= 4.0', "Firefox > 20"]))
    .pipe(replace(`/${config.src}/`, rePathName))
    .pipe(cssmin({
      advanced: true, //类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
      compatibility: 'ie8', //保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
      keepBreaks: true, //类型：Boolean 默认：false [是否保留换行]
      keepSpecialComments: '*'
      //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
    }))
    .pipe(rev()) //添加hash后缀
    .pipe(gulp.dest(dest + "/static/css"))
    .pipe(rev.manifest()) //生成文件映射
    .pipe(gulp.dest(`rev/${pathName}/css`)) //移动到cn/css
    .pipe(bs.reload({
      stream: true
    })); //异步加载样式,不刷新浏览器
});


gulp.task('jshint', () => {
  return gulp.src(srcPath + '/static/js/**/*.js')
    .pipe(jshint({
      scripturl: true
    }))
    .pipe(jshint.reporter('default'))
    .pipe(babel())
    .pipe(gulp.dest(dest + "/static/js"))
});

gulp.task('jshintPro', () => {
  return gulp.src(srcPath + '/static/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(babel())
    .pipe(uglify())
    .pipe(rev()) //添加hash后缀
    .pipe(gulp.dest(dest + "/static/js"))
    .pipe(rev.manifest()) //生成文件映射
    .pipe(gulp.dest(`rev/${pathName}/js`)) //移动到cn/css
});

gulp.task('lessLint', () => {
  return gulp.src(srcPath + '/less/**/*.less')
    .pipe(lesshint({
      // Options
    }))
    .pipe(lessLint.reporter('reporter-name')) // Leave empty to use the default, "stylish"
    .pipe(lessLint.failOnError()) // Use this to fail the task on lint errors
    .pipe(lessLint.failOnWarning()); // Use this to fail the task on lint warnings
});

gulp.task("fileinclude", () => {
  gulp.src([srcPath + '/*.html']) //主文件
    .pipe(fileinclude({
      prefix: '@@', //变量前缀 @@include
      basepath: srcPath + '/static/include', //引用文件路径
      indent: true //保留文件的缩进
    }))
    .pipe(replace(`/${config.src}/`, rePathName))
    .pipe(gulp.dest(dest)); //输出文件路径
});

gulp.task("clean", function () {
  return gulp.src(dest)
    .pipe(clean({
      force: true
    }));
});
gulp.task("copy", () => {
  gulp.src('./common/static/images/**/*')
    .pipe(gulp.dest(dest + "/static/images"))
    .pipe(gulp.dest(srcPath + "/static/images"));
  gulp.src('./common/lib/**/*')
    .pipe(gulp.dest(dest + "/lib"))
    .pipe(gulp.dest(srcPath + "/lib"))
  gulp.src('./common/static/video/**/*')
    .pipe(gulp.dest(dest + "/static/video"))
    .pipe(gulp.dest(srcPath + "/static/video"))
  // gulp.src('./common/static/font/**/*')
  //   .pipe(gulp.dest(dest + "/static/font"))
  //   .pipe(gulp.dest(srcPath + "/static/font"))
});

//清除公共资源文件
gulp.task("cleanCommon", () => {
  return gulp.src([srcPath + '/static/images', srcPath + '/static/video', srcPath + '/lib', dest + '/static/images', dest + '/static/video', dest + '/lib'])
    .pipe(clean({
      force: true
    }));
});


gulp.task('rev', function () {
  return gulp.src([`rev/${pathName}/**/*.json`, dest + '/*.html'])
    .pipe(revCollector({
      replaceReved: true, //允许替换, 已经被替换过的文件
      dirReplacements: {}
    }))
    .pipe(gulp.dest(dest));
});


gulp.task("serve", () => {
  runSequence(["cleanCommon"], ['less', "fileinclude", "jshint"], ["copy"], () => {
    bs.init({
      server: './',
      startPath: dest + '/index.html',
      port:config.port
    });

    gulp.watch(srcPath + '/less/**/*.less', ['less']);
    gulp.watch(srcPath + "/**/*.html", ["fileinclude"]).on('change', bsReload);
    gulp.watch(srcPath + "/static/**/*.js", ['jshint']).on('change', bsReload);
  })
})

gulp.task("build", () => {
  runSequence("clean", ["lessPro", "fileinclude", "jshintPro"], 'copy', () => {
    setTimeout(() => {
      gulp.start('rev')
    }, 300)

  })

});


gulp.task('default', ['serve']);


gulp.task('test', () => {
  console.log('test finish');


});
