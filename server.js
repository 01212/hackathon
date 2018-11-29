const express = require('express');
const app = express();
var path = require('path');
const http = require('http').Server(app);
var io = require('socket.io')(http);
const fs = require("fs");
const ss = require("socket.io-stream");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname)));
app.get('/stream', function(req,res){
	res.sendFile(__dirname + '/stream.html');
});

io.on('connection',function(socket){
	console.log('a user connected');


	// let wstream = fs.createWriteStream('./writeStream.mp4');

	 // let fileBuffer = new Buffer('./writeStream.webm','base64');
	ss(socket).on('stream',function(stream, image){
		stream.pipe(fs.createWriteStream('./writeStream.webm'))
		// socket.broadcast.emit('stream',image);
		console.log(image);
		// fs.writeFielSync()
		// wstream.write(image,(err) => {
		// 	if(err){
		// 		console.log(err.message);
		// 	}else{
		// 		console.log("data written");
		// 	}
		// });
	});

	socket.on('disconnect',function(){
		console.log('user disconnected');
		wstream.end();
	})
});

http.listen(3000,function(){
	console.log('listening on *:3000');
});



// <script>
// 	$(function() {
// 		var socket = io();
// 		$('form').submit(function() {
// 			socket.emit('chat message', $('#m').val());
// 			$('#m').val('');
// 			return false;
// 		});
// 		socket.on('chat message', function(msg) {
// 			$('#messages').append($('<li>').text(msg));
// 		});
// 	});
// </script>
