require('./test.css');

var img1 = require('./big.png');
var img2 = require('./small.png');

module.exports = function(){
  return [
    'mymodule write! ',
    '<br />Big:' + img1,
    '<br />small:' + img2
  ].join('');
}