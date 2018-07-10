var fs           = require('fs');
var Path         = require('path');
var gulp         = require('gulp');
var postcss      = require('postcss');
var gulp_postcss = require('gulp-postcss');
var cssimport    = require('postcss-import');
var autoprefixer = require('autoprefixer');                // 浏览器前缀
var mqpacker     = require('css-mqpacker');                // MQ 包装器
var csswring     = require('csswring');                    // css minify
var nested       = require('postcss-nested');              // 支持css嵌套
var rename       = require('gulp-rename');                 // 文件重命名
var adaptive     = require('postcss-adaptive');

gulp.task('source', function() {
  var list = [], i = 0;

  var basePath = Path.join(__dirname, '/');
  var outFliePath= Path.join(__dirname, '/js');
  /**
   * 生成静态资源列表
   */
  function loadDir(path, args){
    !function(path){
      var fun = arguments.callee;
      var paths = fs.readdirSync(path);

      paths.forEach(function(pathName, index){
        var url =  Path.join(path, pathName);
        if(fs.statSync(url).isDirectory()){
          fun.call(this, url);
        }else{
          if(/\.png|\.jpg|\.gif$/.test(pathName)){
            args.push({
              src : url.replace(basePath, ''),
              id: pathName.replace(/\.\w+$/, '')
            });
            i++;
          }
        }
      });
    }(path);
  }
  loadDir(Path.join(__dirname, 'images'), list);

  !fs.existsSync(outFliePath) && fs.mkdirSync(outFliePath);
  fs.writeFile('js/manifest.json', JSON.stringify(list), function(){
    console.log('manifest.json create success.');
  });
});

gulp.task('postcss', function(){
  var processors = [
    cssimport,
    nested,
    mqpacker,
    autoprefixer,
    adaptive({ 
      remUnit: 100,
      autoRem: true,
    }),
    csswring({
      removeAllComments: true
    })
  ];
  return gulp.src([
            'css/**/*.css',
            '!css/**/*.min.css',
          ])
          .pipe(gulp_postcss(processors))
          .on('error', errorHandler)
          .pipe(rename({suffix: ".min"}))
          .pipe(gulp.dest('./css'))
});

gulp.task('watch', function(){
  gulp.watch([
    'css/**/*.css',
    '!css/**/*.min.css',
  ], ['postcss']);
});

gulp.task('default', ['postcss', 'watch']);
gulp.task('build', ['postcss']);

function errorHandler(error) {
  this.emit('end');
}
