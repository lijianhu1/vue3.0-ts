const gulp = require('gulp');
const less = require('gulp-less');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps'); //调试less
const cached = require('gulp-cached');
// gulp.task('less',function(){
//   console.log('less run ....')
//   return gulp.src('./public/less/*.less')
//     .pipe(less())
//     .pipe(autoprefixer({
//       browsers: [
//         "last 6 versions",
//         "> 1%"
//       ],
//       cascade: false
//     }))
//     .pipe(concat('main.css')) //合并css
//     .pipe(cleanCSS())
//     .pipe(rename({suffix: '.min'}))
//     .pipe(gulp.dest('./public/static/css'));
// })
/*gulp.task('less',function(){
  console.log('less run ....')
  return gulp.src('./public/less/!*.less')
    .pipe(less())
    .pipe(autoprefixer({
      browsers: [
        "last 6 versions",
        "> 1%"
      ],
      cascade: false
    }))
    // .pipe(concat('main.css')) //合并css
    .pipe(gulp.dest('./public/dev/css'));
})*/
gulp.task('less', () => {
  return gulp.src('./public/less/**/*.less')
    .pipe(sourcemaps.init())
    .pipe(cached('less')) //缓存不修改的文件
    .pipe(less())

    .pipe(autoprefixer({
      overrideBrowserslist: [
        "last 6 versions",
        "> 1%"
      ],
      cascade: false
    }))
    .pipe(cleanCSS({
      advanced: true, //类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
      compatibility: 'ie8', //保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
      keepBreaks: true, //类型：Boolean 默认：false [是否保留换行]
      keepSpecialComments: '*'
      //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./public/static/css/"))
});
//css min
gulp.task('mincss',function(){
  console.log('cleanCSS run ....')
  return gulp.src('./public/dev/css/*.css')
    .pipe(cleanCSS())
    // .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./public/static/css'));
})

//css min
gulp.task('uglify',function(){
  console.log('uglify run ....')
  return gulp.src('./public/static/js/*.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./public/static/js'));
})

gulp.task('watch',function(){
  gulp.watch('./public/less/**/*.less',['less']);
  // gulp.watch('./public/dev/css/*.css',['mincss']);
  console.log('watch run ....');
})
gulp.task('default',['less','watch'],function(){
  console.log('default callback ....');
})


// //每个同步执行的任务组用[]包起来，用逗号隔开
// //[]里面的任务将会异步执行
// const gulpSequence = require('gulp-sequence');
// gulp.task('buildoverlays',
//   gulpSequence(
//     ['overlaysRestJs','overlaysRestCss'],
//     ['overlaysLib','overlaysRestOther'],
//     'overlaysHtml'
//   )
// );
