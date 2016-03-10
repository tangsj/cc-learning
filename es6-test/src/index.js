var a = 1;
{
  let a = 0;
  //console.log(a);
}

//console.log(a);

var [x, y] = [1, 2];

//console.log(x);
//console.log(y);

//console.log(`string tpl ${x}`);

var arr = [1,2,3];
for(var i = 0; i < arr.length; i++){}

//console.log('i:' +i);

for(let l = 0; l < arr.length; l++){}

var set = new Set(["a", "b", "c"]);
//console.log(set);

//import * as obj from './module';
//console.log(obj);

var a = (x = 1, y = 2, z = 1) => {
  console.log('fun');
}

console.log('Rest: ', ...[1,2,3]);

var o = {
  method(){
    return true;
  }
}

class Point {
  constructor(x){
    this.x = x;
  }
  go(){
    return this.x
  }
}
var p = new Point('Es6 Class');
console.log( p.go() );

class TPoint extends Point {
  constructor(x){
    super(x);
  }
  go(){
    return this.x + ' Go'
  }
}

var tp = new TPoint('Es6 Class Extends');
console.log(tp.go());




console.log([1,2,3,4].includes(1))