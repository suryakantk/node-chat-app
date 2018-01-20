// const path = require('path');
// const express = require('express');
// const http = require('http');
// const publicPath = path.join(__dirname,'../public');
// const port=process.env.PORT || 3000;
//
// // console.log(publicPath);
// // console.log(__dirname + '../public');
//
// var app =express();
// var server = http.createServer(app);
//
// app.use(express.static(publicPath));
//
// app.listen(port,()=>{
//  console.log('server is up on ',port);
// });


const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname,"../public");

var app = express();
// var server = http.createServer((req,res) => {
//
// });

var server = http.createServer(app);

var io = socketIO(server);
io.on('connection',(socket)=> {
   console.log("new user connected.");
// socket.emit('newEmail', {
//   from:'surya@gmil.com',
//   text:'Hi Whats going on',
//   createdAt:'123'
// });
socket.emit('newMessage', {
  from:'prashant',
  text:'Hi Whats going on',
  createdAt:'123123'
});
// socket.on('createEmail', (newEmail) => {
//   console.log('create Email ',newEmail);
// });
socket.on('createMessage', (newMessage) => {
  console.log('create Message ',newMessage);
});
   socket.on('disconnect',() => {
     console.log('user is disconnected');
   })
});
app.use(express.static(publicPath));


app.get('/',(req,res) => {
 res.send("Node chat app started");
});

server.listen(port, ()=>{
 console.log(`server is up on port ${port}`);
});
