"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _console;

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var a = 1;
{
  var _a = 0;
  //console.log(a);
}

//console.log(a);

var x = 1;
var y = 2;

//console.log(x);
//console.log(y);

//console.log(`string tpl ${x}`);

var arr = [1, 2, 3];
for (var i = 0; i < arr.length; i++) {}

//console.log('i:' +i);

for (var l = 0; l < arr.length; l++) {}

var set = new Set(["a", "b", "c"]);
//console.log(set);

//import * as obj from './module';
//console.log(obj);

var a = function a() {
  var x = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
  var y = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];
  var z = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

  console.log('fun');
};

(_console = console).log.apply(_console, ['Rest: '].concat([1, 2, 3]));

var o = {
  method: function method() {
    return true;
  }
};

var Point = (function () {
  function Point(x) {
    _classCallCheck(this, Point);

    this.x = x;
  }

  _createClass(Point, [{
    key: "go",
    value: function go() {
      return this.x;
    }
  }]);

  return Point;
})();

var p = new Point('Es6 Class');
console.log(p.go());

var TPoint = (function (_Point) {
  _inherits(TPoint, _Point);

  function TPoint(x) {
    _classCallCheck(this, TPoint);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TPoint).call(this, x));
  }

  _createClass(TPoint, [{
    key: "go",
    value: function go() {
      return this.x + ' Go';
    }
  }]);

  return TPoint;
})(Point);

var tp = new TPoint('Es6 Class Extends');
console.log(tp.go());

console.log([1, 2, 3, 4].includes(1));