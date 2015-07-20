!function(doc, win){
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 20 * (clientWidth / 320).toFixed(5) + 'px';
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
}(document, window);
/*
;(function (doc, win) {
  var dpr, scale;
  var docEl = document.documentElement;
  var metaEl = document.querySelector('meta[name="viewport"]');
  var px = document.getElementById('px');
  dpr = win.devicePixelRatio || 1;
  docEl.style.fontSize = 20 * (docEl.clientWidth / 320) + 'px';
  scale = 1 / dpr;
  // 设置viewport，进行缩放，达到高清效果
  metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale + ',user-scalable=no');
  // 设置data-dpr属性，留作的css hack之用
  docEl.setAttribute('data-dpr', dpr);
  
  window.dpr = dpr;
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var _clientWidth = docEl.clientWidth;
      if (!_clientWidth) return;
      docEl.style.fontSize = 20 * (_clientWidth / 320) + 'px';
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
 })(document, window);
*/

