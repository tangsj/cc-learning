"use strict";

var _console;

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

  console.log('fun');
};

func = function () {
  console.log('func');
};

(_console = console).log.apply(_console, [1, 2, 3]);