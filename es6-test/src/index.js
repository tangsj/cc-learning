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

var a = (x = 1) => {
  console.log('fun');
}

func = () => {
  console.log('func');
}

console.log(...[1,2,3]);