$(function () {
  var $wrap = $("#wrap");

  var screenchange = {
    width: 1334,//设计稿宽度
    height: 750,//设计稿高度
    resize: function () {
      var html = document.documentElement;
      var w = html.clientWidth, h = html.clientHeight;
      if (this.w != w || this.h != h) {
        if (h < w) {//横屏
          if (w / h > this.width / this.height) {
            html.style.fontSize = h / this.height * 100 + "px";
          } else {
            html.style.fontSize = w / this.width * 100 + "px";
          }
          $("#body").removeClass('sscene').addClass('hscene')
          $wrap.css({ "width": w, "height": h, "transform": "none" });
        } else {//竖屏
          if (h / w > this.width / this.height) {
            html.style.fontSize = w / this.height * 100 + "px";
          } else {
            html.style.fontSize = h / this.width * 100 + "px";
          }
          $("#body").removeClass('hscene').addClass('sscene')
          $wrap.css({ "width": h, "height": w, "transform": "rotate(90deg) translate(0,-" + w + "px)" });
        }
        this.w = w;
        this.h = h;
      }
      $("#body").removeClass("loadingbox");
    },
    set: null,
    fn: function () {
      var self = screenchange;
      clearTimeout(self.set);
      self.resize();
      self.set = setTimeout(function () {
        self.resize();
        Stage.init();
      }, 300);
    },
    init: function () {
      window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", this.fn, false);
      this.fn();
    }
  }

  screenchange.init();
});


var Stage = {
  state: {
    activeRow: 0,
    activeCol: 0,
    row: 3, // 默认行数
    col: 3, // 默认列数
    el: null, // 容器
    design: { // 设计每一屏的大小
      width: 1334,
      height: 750,
    },
    screen: {
      dpr: 2,
      width: 0,
      height: 0,
    },
  },
  init: function(row, col) {
    var $wrap = $('#wrap');
    // 默认3x3
    this.state.row = row || 3;
    this.state.col = col || 3;

    // 取屏幕信息
    this.state.screen.dpr = window.devicePixelRatio || 2;
    this.state.screen.width = $wrap.width();
    this.state.screen.height = $wrap.height();

    // 取容器
    this.state.el = $('.stage');
    // 确定容器总大小
    this.state.el.css({
      width: this.state.screen.width * this.state.col,
      height: this.state.screen.height * this.state.row,
    });

    // 设置每一屏的大小
    this.state.el.find('.screen').css({
      width: this.state.screen.width + 'px',
      height: this.state.screen.height + 'px',
    });
    // 适配屏幕旋转带来的定位差
    this.goto(this.state.activeRow, this.state.activeCol);
  },
  goto(rowIndex, colIndex) { // 0，0 开始
    var translateX = -this.state.screen.width * colIndex;
    var translateY = -this.state.screen.height * rowIndex;
    console.log(rowIndex, colIndex);
    console.log(translateX, translateY);
    TweenMax.to(this.state.el, 1, { x: translateX, y: translateY });

    this.state.activeRow = rowIndex;
    this.state.activeCol = colIndex;
  },
}
