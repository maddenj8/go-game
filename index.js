var socket = io();
function setName() {  
   
   var data;
   data = window.prompt("Please enter your username!", "PC Principle");
   socket.emit('setUsername', data);
   socket.on('invalidName', function(data) {
     alert(data);
     
   });
   socket.on('nameSet', function(data) {
      alert(data);
   });
   
}

function sendState() {
   stones = [];
   stones = getCoords();
   console.log(stones);
   socket.emit('boardChange', stones);
   
}

socket.on('broadcast', function (data) {
   updateBoard(data);
});


      
   //socket.on('userSet', function(user) {
   //   socket.emit('setUsername', user);
      
      //document.body.innerHTML = '<input type = "text" id = "message">\
      //<button type = "button" name = "button" onclick = "sendMessage()">Send</button>\
      //<div id = "message-container"></div>';
   //});

   /*
   function sendMessage() {
      var msg = document.getElementById('message').value;
      if(msg) {
         socket.emit('msg', {message: msg, user: user});
      }
   }
   socket.on('newmsg', function(data) {
         document.getElementById('message-container').innerHTML += '<div>' + data.message + '</div>'
   })
   */
