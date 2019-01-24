window.onload = function () {
  var target = document.getElementById('target');
  // Transform(target, true);

  var alloyTouch = new AlloyTouch({
    touch: "#wrapper",//反馈触摸的dom
    vertical: true,//不必需，默认是true代表监听竖直方向touch
    // target: target, //运动的对象
    // property: "translateY",  //被运动的属性
    min: -2000, //不必需,运动属性的最小值
    max: 0, //不必需,滚动属性的最大值
    sensitivity: 1,//不必需,触摸区域的灵敏度，默认值为1，可以为负数
    factor: 1,//不必需,表示触摸位移运动位移与被运动属性映射关系，默认值是1
    moveFactor: 1,//不必需,表示touchmove位移与被运动属性映射关系，默认值是1
    step: 45,//用于校正到step的整数倍
    bindSelf: false,
    maxSpeed: 2, //不必需，触摸反馈的最大速度限制 
    initialValue: 0,
    change: function (value) {
      // console.log(value);
      target.style.transform = 'translateY('+ value +'px)';
    },
    touchStart: function (evt, value) { },
    touchMove: function (evt, value) {
    },
    touchEnd: function (evt, value) { },
    tap: function (evt, value) {
      
    },
    pressMove: function (evt, value) {
      console.log('pressMove');
    },
    animationEnd: function (value) {
      console.log('animationEnd');
    } //运动结束
  });
}
