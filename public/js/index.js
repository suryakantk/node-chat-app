
var socket=io();
socket.on('connect',function (){
 console.log('connected to server');
socket.emit('createEmail', {
  to:"sck*gmail.com",
  text:"Hello"
});

socket.emit('createMessage',{
  from:"s*gmail.com",
  text:"Hello !!"
});

});

socket.on('disconnect',function (){
 console.log('disconnect from server');
});

//
// socket.on('newEmail',function (email)  {
//   console.log('New Email',email);
// });

socket.on('newMessage',function (message)  {
  console.log('New message',message);
});
