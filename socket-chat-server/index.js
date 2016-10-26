var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function(req, res){
  res.send('hello world');
});

// global var
var userlist = {};

io.on('connection', function (socket) {

  console.log(userlist);
  // 有人进入
  socket.on('add user', function (data) {
    socket.emit('user num', socket.id);
    userlist[socket.id] = data;
    // 通知其它人
    socket.broadcast.emit('user join', { name: data });
  });

  // 收到消息 全部发送出去
  socket.on('rmsg', function(data){
    var name = userlist[socket.cid];
    socket.broadcast.emit('rmsg', { name: name, text: data });
  });

  // 断开链接
  socket.on('disconnect', function(){
    delete userlist[socket.id];
    console.log(socket.id + '断开链接');
  });
});
