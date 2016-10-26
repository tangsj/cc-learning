var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.send('<h1>Connected to WebSocket Server v0.3</h1>');
});
/**

====== Sever ======
socket_id	:		socket_id is made by WS-server. it will be sent on Event: mysocket.


obj from client:
====== MUST ======
userid		:		client posts the number that is generated unique number by client
username	:		client posts the name that belong to who views the website
appname		:		client posts the name that is application's name
roomid		:		client posts the number that is room's id in the application

====== CUSTOM ======
Data1,Data2.....

**/
//应用名称
var appname = '';
//房间号
var roomid = 0;
//用户标识
var userid = '';
//socket id
var socket_id = '';
//在线用户
var onlineUsers = {};
//当前在线人数
var onlineCount = {};


io.on('connection', function(socket){
    //监听新用户加入
    socket.on('login', function(obj){
		//获取当前应用名
		appname = obj.appname;
		//获取当前应用的房间号
		roomid = obj.roomid;
		//用户标识
		socket.userid = userid = obj.userid;
		socket.username = username = obj.username;

		socket_id = socket.id;

        //检查在线列表，如果不在里面就加入
        if(!onlineUsers[appname][roomid]['users'].hasOwnProperty(obj.userid)) {
            onlineUsers[appname][roomid]['users'][userid] = obj.username;
            //在线人数+1
			if (onlineCount[appname][roomid]['count'] == null || onlineCount[appname][roomid]['count']<0) onlineCount[appname][roomid]['count'] =1;
			else onlineCount[appname][roomid]['count']++;
			onlineCount[appname]['totalcount']++;
        }

      //向所有客户端广播用户加入
      io.emit('login', {
  			onlineUsers:onlineUsers[appname],
  			onlineCount:onlineCount[appname],
  			appname:appname,
  			roomid:roomid,
  			client_info:obj
  		});
		  socket.emit('mysocket',{socket_id:socket_id});
  });

	socket.on('sendWhisp', function(obj){
		var target_id = obj.target_id;
		io.sockets.sockets[target_id].emit('getWhisp', obj);
	});

  //监听用户退出
  socket.on('disconnect', function(){
    console.log("disconnect");

		//退出用户的信息
		var obj = {socketid: socket.id, userid:socket.userid, username:onlineUsers[appname][roomid]['users'][socket.userid]};

		//删除
		delete onlineUsers[appname][roomid]['users'][userid];
		//在线人数-1
		onlineCount[appname][roomid]['count']--;
		onlineCount[appname]['totalcount']--;
    console.log('user logout: ' + socket.id);
		//向所有客户端广播用户退出
		io.emit('logoutlogout', {onlineUsers:onlineUsers[appname], onlineCount:onlineCount[appname], client_info:obj});
  });

  //监听用户发布内容
  socket.on('message', function(obj){
      //向所有客户端广播发布的消息
      io.emit('message', obj);
  });

	socket.on('checkmyroom', function(obj){
		io.emit('checkmyroom',{onlineUsers:onlineUsers[obj.appname][obj.roomid]['users'], onlineCount:onlineCount[obj.appname]});
	});

});


// http.listen(80, function(){
//     console.log('listening on *:80');
// });

http.listen(8080, function(){
    console.log('listening on *:8080');
});
