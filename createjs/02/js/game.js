!function(){
  var $win = $(window);
  var $body = $('body');
  var $wrapper = $('.wrapper');

  var stage, canvas, cjs = createjs;

  canvas = document.querySelector('#gamestage');
  stage = new cjs.Stage(canvas);

  // 柱子的容器
  var colList = new cjs.Container();
  stage.addChild(colList);

  // 金币的容器
  var goldList = new cjs.Container();
  stage.addChild(goldList);

  // 创建舞台背景
  var bg = new cjs.Bitmap('images/bg.png');
  bg.setBounds(0, 0, 640, 1136);
  stage.addChild(bg);

  // 生成1个柱子
  function getColumn(){
    var col = new cjs.Bitmap('images/column.png');
    col.setBounds(0, 0, 237, 632);
    return col;
  }

  // 生成1颗金币
  function getGold(){
    var gold = new cjs.Bitmap('images/gold.png');
    gold.setBounds(0, 0, 58, 56);
    return gold;
  }

  // 添加1个柱子到ColList
  var x = 0;
  function addColToColList(){
    var fcol = getColumn();
    var fcolbounds = fcol.getBounds();
    fcol.x = x;
    x = 300;
    fcol.y = canvas.height - fcolbounds.height;
    colList.addChild(fcol);

    // 同时生成对应的金币
    var fgold = getGold();
    fgold.x = 170;
    fgold.y = canvas.height - fcolbounds.height - fgold.getBounds().height;
    goldList.addChild(fgold);
  }

  // 初始化生成首屏内容
  addColToColList();

  // 小鸟
  var bird = new cjs.Bitmap('images/bird.png');
  bird.setBounds(0, 0, 83, 58);
  bird.x = 70;
  var firstCol = colList.getChildIndex(1);

  // console.log(firstCol);
  // var fcolbounds ＝ firstCol.getBounds();
  // bird.y = canvas.height - fcolbounds.height - bird.getBounds().height;
  stage.addChild(bird);


  // 动态生成地图 保持map container 里面有3个柱子
  function dynamicMap(){
    // console.log(colList.getNumChildren());
    if(colList.getNumChildren() < 3){
      addColToColList();
    }
    // 添加新柱子

    // 删除已超出屏幕左侧柱子

  }


  cjs.Ticker.setFPS(60);
  cjs.Ticker.addEventListener('tick', function(){

    dynamicMap();

    stage.update();
  });
}();