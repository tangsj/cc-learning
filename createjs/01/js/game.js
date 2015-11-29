!function(){
  var $win = $(window);
  var $body = $('body');
  var $wrapper = $('.wrapper');

  /**************************变量区域*****************************/
  // 舞台, 加载器, 图片加载列表, 游戏区域, 运动的花
  var stage, loader, manifest, areaContainer, flower;
  var flowerDirectionx = 1, flowerDirectiony = 1;
  // 水平加速度，垂直加速度
  var ax = 1, ay = 1;
  // 加速度增量，用户摇动时影响这个值
  var aup = 1;

  // 当前关卡
  var nowCheckPoint = 0;
  // 刷新频率
  var FPS = 60;

  // 9宫格
  var areas = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];

  // 单元格大小
  var colWidth = colHeight = $wrapper.width()/ areas[0].length ;
  // 水平相对640scale
  var scaleX = $wrapper.width() / 640;

  var Game = {
    /**
     * 加载资源
     * @return {[type]} [description]
     */
    loadSource: function(){
      loader = new createjs.LoadQueue(false);
      loader.addEventListener("fileload", handleFileLoad);
      loader.addEventListener("complete", handleComplete);
      loader.loadManifest(manifest);

      function handleFileLoad(evt){
      }

      function handleComplete(){
        Game.init();
      }
    },
    /**
     * Game init
     * @return {[type]} [description]
     */
    init : function(){
      stage = new createjs.Stage(document.getElementById('gamestage'));

      createjs.Touch.enable(stage);
      stage.enableMouseOver(10);
      stage.mouseMoveOutside = true;

      //
      Game.autoFull();
      Game.drawAreas();
      Game.drawFlower();

      // TICK
      createjs.Ticker.setFPS(FPS);
      createjs.Ticker.addEventListener('tick', Game.handleTick);
    },
    /**
     * 绘制9格区域, 将九格区域绘制到屏幕中央
     * @return {[type]} [description]
     */
    drawAreas: function(){
      areaContainer = new createjs.Container();
      for(var i = 0; i < areas.length; i++){
        for(var j = 0; j < areas[i].length; j++){
          var rect = new createjs.Shape();
          rect.graphics.beginFill(Game.randomColor()).drawRect(colWidth * j, colHeight * i, colWidth, colHeight).endFill();
          rect.setBounds(colWidth * j, colHeight * i, colWidth, colHeight);
          areaContainer.addChild(rect);
          areas[i][j] = rect;
        }
      }
      // 设置容器位置
      areaContainer.y = stage.canvas.height / 2 - areaContainer.getBounds().height / 2;
      stage.addChild(areaContainer);
    },
    /**
     * 绘制一个花到Stage
     * @return {[type]} [description]
     */
    drawFlower: function(){
      flower = new createjs.Bitmap(loader.getResult('f1'));
      // 根据缩放比例对图片进行等比放大
      flower.scaleX = flower.scaleY = scaleX;
      var fb = flower.getBounds();
      flower.cache(fb.x, fb.y, fb.width, fb.height, scaleX);
      stage.addChild(flower);
    },
    /**
     * flower move
     * @return {[type]} [description]
     */
    flowerRun: function(){
      var fb = flower.getBounds();
      if((flower.x + fb.width * flower.scaleX) >= stage.canvas.width){
        flowerDirectionx = -1;
      }else if(flower.x <= 0){
        flowerDirectionx = 1;
      }

      if((flower.y + fb.height * flower.scaleY) >= stage.canvas.height){
        flowerDirectiony = -1;
      }else if(flower.y <= 0){
        flowerDirectiony = 1;
      }

      flower.x += (ax*aup) * flowerDirectionx * scaleX;
      flower.y += (ay*aup) * flowerDirectiony * scaleX;
    },
    /**
     * 碰撞检测
     * @return {[type]} [description]
     */
    collision: function(){
      var fb = flower.getBounds();

      // flower 中心点
      var fc = {
        x: flower.x + (fb.width * flower.scaleX)/2,
        y: flower.y + (fb.height * flower.scaleY)/2
      }

      for(var i = 0; i < areas.length; i++){
        for(var j = 0; j < areas[i].length; j++){
          var rect = areas[i][j];
          var rb = rect.getBounds();
          if( (rb.x <= fc.x) && fc.x <= (rb.x+rb.width) && ((rb.y+areaContainer.y) <= fc.y && fc.y <=(rb.y+areaContainer.y+rb.height)) ){
            var light = new createjs.Shape();
            light.graphics.beginFill(Game.randomColor()).drawRect(rb.x, rb.y, rb.width, rb.height);
            light.setBounds(rb.x, rb.y, rb.width, rb.height);
            areaContainer.addChild(light);
            areaContainer.removeChild(rect);
            areas[i][j] = light;
          }
        }
      }
    },
    /**
     * stage update tick
     * @return {[type]} [description]
     */
    handleTick : function(){   
      Game.flowerRun();
      Game.collision();
      if(!createjs.Ticker.getPaused()){
        stage.update();
      }
      //createjs.Ticker.setPaused(true)
    },
    /**
     * game stage  full page
     * @return {[type]} [description]
     */
    autoFull: function(){
      window.addEventListener('resize', onResize);
      window.addEventListener('orientationchange', onResize);

      function onResize(){
          stage.canvas.width = $wrapper.width();
          stage.canvas.height = $wrapper.height();
      }

      onResize();
    },
    /**
     * 随机一个颜色 测试方法
     * @return {[type]} [description]
     */
    randomColor: function(){
        var colorvalue=["0","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],
            colorprefix="#",
            index;
        for(var i = 0; i < 6; i++){
          index = Math.round(Math.random()*14);
          colorprefix += colorvalue[index];
        }
        return colorprefix;
      }
  }

  /**************************游戏初始化*****************************/
  /**************************图片加载列表*****************************/
  $.getJSON('js/manifest.json', function(data){
    manifest = data;
    Game.loadSource();
  });
}();