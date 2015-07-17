"use strict";

var gulp         = require('gulp');
var postcss      = require('postcss');
var gulp_postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');           // 浏览器前缀
var sourcemaps   = require('gulp-sourcemaps');
var csswring     = require('csswring');                    // css minify
var nested       = require('postcss-nested');              // 支持css嵌套
var vars         = require('postcss-simple-vars');         // 变量定义
var cssimport    = require('postcss-import');              // css import
var rename       = require('gulp-rename');                 // 文件重命名
var px2rem       = require('postcss-px2rem');

gulp.task('postcss', function(){
  var processors = [
      vars,
      cssimport,
      px2rem({ remUnit: 40 }),
      autoprefixer({browsers: ['last 2 versions']})
  ];
  return gulp.src('./css/main.css') 
          .pipe(sourcemaps.init())
          .pipe(gulp_postcss(processors))
          .on('error', errorHandler)
          .pipe(gulp_postcss([ // 这里与px2rem 同时加入processors里会造成 removeAllComments 失效
            csswring({
              preserveHacks: true,
              removeAllComments: true
            })
          ]))
          .on('error', errorHandler)
          .pipe(rename({suffix: ".min"}))
          .pipe(sourcemaps.write('.'))
          .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
    gulp.watch([
      './css/**/*.css'
    ], ['postcss']);
});

// Main stask
gulp.task('default', ['postcss','watch']);

function errorHandler(error){
  console.log(error.message);
  console.log(error.fileName);
  console.log('line:', error.line, 'column:', error.column);
  this.emit('end');
}