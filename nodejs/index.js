var fs = require('fs');
var rs = fs.createReadStream('./test.txt');

rs.on('data', function(chunk){
  console.log(chunk, chunk.toString('utf-8'));
});
rs.on('end', function(){
  console.log('end');
});
