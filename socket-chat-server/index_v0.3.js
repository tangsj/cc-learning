var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(80, function(){
    console.log('listening on *:8080');
});

app.get('/', function(req, res){
  res.send('hello world');
});

// global var
var userlist = {};

io.on('connection', function (socket) {
  console.log('在线用户数：' + Object.keys(userlist).length);

  // 有人进入
  socket.on('login', function (data) {
    userlist[socket.id] = data;
    // 通知其它人
    socket.broadcast.emit('login', { name: data });
    socket.emit('mysocket', {socket_id: socket.id});
  });

  // 消息定向发送
  socket.on('sendWhisp', function(data){
    var target_id = data.target_id;
    io.to(target_id).emit('getWhisp', data);
  });

  // 收到消息 广播
  socket.on('message', function(data){
    socket.broadcast.emit('message', data);
  });

  // 断开链接
  socket.on('disconnect', function(){
    if(userlist[socket.id]){
      delete userlist[socket.id];
    }
    console.log('用户退出：' + socket.id);

    socket.broadcast.emit('logout', {socketid: socket.id});
  });
});
