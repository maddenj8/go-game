
var app = require('express')();
var server = require('http').Server(app)
var io = require('socket.io')(server);
var express = require('express');
var path = require('path');
var port = process.env.PORT || 3000;

server.listen(3000, function() { 
   console.log('Listening on port *: 3000');
});
app.get('/', function(req, res){
   res.sendfile('index.html');
});

app.use(express.static(path.join(__dirname, 'public'))); 

stones= [];
users = [];
var clients = 0;
app.get('/', function(req, res){
   res.sendfile('index.html');
});



io.on('connection', function(socket){
   console.log("A user connected!");
   clients++;
   socket.on('setUsername', function(data) {
      if (data in users || data == "" || data == null) {
         socket.emit('invalidName', 'Please enter a valid username!');
      } else {
         users.push(data)
         socket.emit('nameSet', data + " is now your username");
      }  
   });
   socket.on('boardChange', function(data) {
      //this is the current state of the board, update it
      console.log("Recieved Data\n" + data);
      stones = data;
      io.sockets.emit('broadcast', stones);
   }); 
   
   socket.on('setUsername', function(data) {
      if(data in users) {
         socket.emit('userExists', data + ' username is taken! Try again.');
      } else { 
         users.push(data);
         socket.emit('userSet', {username: data});
      }
   });
   
   
   socket.on('msg', function(data) {
      io.sockets.emit('newmsg', data);
   });
   socket.on('disconnect', function() {  
      clients--;
      console.log("user disconnected");
   });
   
});




 


