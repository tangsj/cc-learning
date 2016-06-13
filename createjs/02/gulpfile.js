"use strict";

var gulp         = require('gulp');
var postcss      = require('postcss');
var gulp_postcss = require('gulp-postcss');
var rename       = require('gulp-rename');
var csswring     = require('csswring');
var px2rem       = require('postcss-px2rem');

gulp.task('postcss', function(){
  var processors = [
    px2rem({ remUnit: 64 }),
    csswring({
      preserveHacks: true,
      removeAllComments: true
    })
  ];
  return gulp.src('./css/main.css') 
          .pipe(gulp_postcss(processors))
          .on('error', errorHandler)
          .pipe(rename({suffix: ".min"}))
          .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function () {
    gulp.watch([
      './css/**/*.css'
    ], ['postcss']);
});

// Main stask
gulp.task('default', ['postcss','watch']);

function errorHandler(error){
  this.emit('end');
}