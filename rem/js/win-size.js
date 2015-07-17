/*!function(doc, win){
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
}(document, window);*/


!function(doc, win){
  var dpr, rem, scale, resizeEvt;

  var docEl = doc.documentElement;
  var metaEl = doc.querySelector('meta[name="viewport"]');

  //resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
  dpr = win.devicePixelRatio || 1;
  scale = 1 / dpr;

  recalc = function () {
    
    var clientWidth = docEl.clientWidth;

    if (!clientWidth) return;
    alert(clientWidth + '--' + dpr);
    docEl.style.fontSize = 64 * (clientWidth * dpr / 640) + 'px';

    metaEl.setAttribute('content', 'width=' + dpr * clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale + ',user-scalable=no');
    docEl.setAttribute('data-dpr', dpr);
  };

  if (!doc.addEventListener) return;
  win.addEventListener('orientationchange', recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
}(document, window);