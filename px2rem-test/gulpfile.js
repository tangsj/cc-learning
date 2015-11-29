"use strict";

var gulp         = require('gulp');
var postcss      = require('postcss');
var gulp_postcss = require('gulp-postcss');
var Px2remObj       = require('px2rem');

var px2rem = postcss.plugin('postcss-px2rem', function(options) {
    return function(css, result) {
        var oldCssText = css.toString();
        var px2remIns = new Px2remObj(options);
        var newCssText = px2remIns.generateRem(oldCssText);
        var newCssObj = postcss.parse(newCssText);
        result.root = newCssObj;
    };
});

gulp.task('postcss', function(){
  var processors = [
    px2rem({ remUnit: 64 }),
  ];
  return gulp.src('./src/main.css') 
          .pipe(gulp_postcss(processors))
          .on('error', errorHandler)
          .pipe(gulp.dest('./dist/'));
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