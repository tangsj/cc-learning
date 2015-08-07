
!function(doc, win){
  // 设计稿宽度 
  var psdWidth = 640;
  // 1rem
  var baseFontSize = 32;
  // 最大FontSize
  var maxFontSize = 32;

  var docEl = doc.documentElement;
  
  var resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize';

  var recalc = function () {
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    var fs = baseFontSize * (clientWidth / psdWidth).toFixed(5);

    if(fs >= maxFontSize){
      fs = maxFontSize;
    }

    docEl.style.fontSize = fs + 'px';
  };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
}(document, window);

/*
;(function(win){
    var doc = win.document;
    var docEl = doc.documentElement;
    var ori = win.orientation || 0;
    // 设计稿宽度
    var dd = 640;
    // 竖屏宽高比
    var wh = 9/16;
    // 默认rem设置
    var defaultRem = 32;
    // 像素比
    var dpr = win.devicePixelRatio;
    // 缩放
    var scale = dpr?1/dpr:1;
    // 输出viewport
    doc.write('<meta name="viewport" content="initial-scale='+scale+',maximum-scale='+scale+',minimum-scale='+scale+',user-scalable=0">');
    // 网页宽度
    var docW = docEl.getBoundingClientRect().width;
    // 横屏换算
    if (Math.abs(ori) == 90) {
        docW *= wh;
    }
    // html设置字号
    docEl.style.fontSize = (docW/dpr)*defaultRem/(dd/dpr)+'px';
})(window);
*/
