//start mine

// // const path = require('path');
// // const express = require('express');
// // const http = require('http');
// // const publicPath = path.join(__dirname,'../public');
// // const port=process.env.PORT || 3000;
// //
// // // console.log(publicPath);
// // // console.log(__dirname + '../public');
// //
// // var app =express();
// // var server = http.createServer(app);
// //
// // app.use(express.static(publicPath));
// //
// // app.listen(port,()=>{
// //  console.log('server is up on ',port);
// // });
//
//
// const path = require('path');
// const http = require('http');
// const express = require('express');
// const socketIO = require('socket.io');
// const port = process.env.PORT || 3000;
// const publicPath = path.join(__dirname,"../public");
// // /const {generateMessage} = require('./utils/message');
// var app = express();
// // var server = http.createServer((req,res) => {
// //
// // });
//
// var server = http.createServer(app);
//
// var io = socketIO(server);
// io.on('connection',(socket)=> {
//    console.log("new user connected.");
// // socket.emit('newEmail', {
// //   from:'surya@gmil.com',
// //   text:'Hi Whats going on',
// //   createdAt:'123'
// // });
//
//
// socket.emit('newMessage', {
//   from:'Admin',
//   text:'welcome to the chat app',
//   createdAt:new Date().getTime()
// });
//
// //broadcast
// // socket.broadcast.emit('newMessage', {
// //   from:
// // });
//
// // socket.broadcast.emit('newMessage', generateMessage('new user has joined.'));
// // socket.on('createEmail', (newEmail) => {
// //   console.log('create Email ',newEmail);
// // });
// socket.on('createMessage', (message) => {
//   console.log('create Message ',message);
//   io.emit('newMessage',{
//     from:message.from,
//     text:message.text,
//     createdAt:new Date().getTime()
//   })
// });
//    socket.on('disconnect',() => {
//      console.log('user is disconnected');
//    })
// });
// app.use(express.static(publicPath));
//
//
// app.get('/',(req,res) => {
//  res.send("Node chat app started");
// });
//
// server.listen(port, ()=>{
//  console.log(`server is up on port ${port}`);
// });
/// end

//
// const path = require('path');
// const express = require('express');
// const http = require('http');
// const socketIO = require('socket.io');
//
// var {generateMessage,generateLocationMessage} = require('./utils/message/message.js');
// const publicPath = path.join(__dirname,'../public');
// const port = process.env.PORT ||  3000;
//
//
// var app=express();
// var server = http.createServer(app);
// var io = socketIO(server);//http://localhost:3000/socket.io/socket.io.js
// io.on('connection',(socket)=>{
//  console.log('New user connected');
//
//  socket.on('disconnect',()=>{
//    console.log('Disconnected one of client.');
//  });
//  //Emit Events
//  // socket.emit('newEmail',{
//  //   from:"shri@gmail.com",
//  //   text:"Hey,what is going on",
//  //   createdAt:123
//  // });
//
//  //Listening Events
//  socket.on('newMessage',(newMessage)=>{
//    console.log('Create Message',newMessage);
//  });
//
//  socket.on('createMessage',(message)=>{
//    console.log('createdMessage',message);
//    io.emit('newMessage',generateMessage(message.from,message.text));
//    });
//
//    // socket.on('createLocationMessage',(coords) => {
//    //   io.emit('newMessage',generateMessage('Admin',`${coords.latitude} , ${coords.longitude}`));
//    //  });
//    socket.on('createLocationMessage',(coords) => {
//         io.emit('newLocationMessage',generateLocationMessage('Admin',`${coords.latitude} , ${coords.longitude}`));
//        io.emit('newMessage',generateMessage('Admin',`${coords.latitude} , ${coords.longitude}`));
// 	  });
//
//   //});
//
//
//  socket.emit('newMessage',generateMessage('Admin','Welcome to chat app'));
//  socket.broadcast.emit('newMessage',generateMessage('Admin','New user Joined'));
//
//
// });
//
//
//
// app.use(express.static(publicPath));
// //Start the server.
// server.listen(port,()=>{
//  console.log(`listening on ${port}`);
// });


const path = require('path');
  const express = require('express');
  const http = require('http');
  const socketIO = require('socket.io');

  var {generateMessage,generateLocationMessage} =require('./utils/message/message.js');
  const publicPath = path.join(__dirname,'../public');
  const port = process.env.PORT ||  3000;


  var app=express();
  var server = http.createServer(app);
  var io = socketIO(server);//http://localhost:3000/socket.io/socket.io.js
  io.on('connection',(socket)=>{
   console.log('New user connected');

   socket.on('disconnect',()=>{
     console.log('Disconnected one of client.');
   });
   //Emit Events
   // socket.emit('newEmail',{
   //   from:"shri@gmail.com",
   //   text:"Hey,what is going on",
   //   createdAt:123
   // });

   //Listening Events
   // socket.on('newMessage',(newMessage)=>{
   //   console.log('Create Message',newMessage);
   // });
   //
   socket.on('createMessage',(message)=>{
     console.log('createdMessage',message);
     io.emit('newMessage',generateMessage(message.from,message.text));
     });
    // socket.on('createLocationMessage',(coords) => {
    //     io.emit('newMessage',generateMessage('Admin',`${coords.latitude} , ${coords.longitude}`));
    // });

    socket.on('createLocationMessage',(coords) => {
        io.emit('newLocationMessage',generateLocationMessage('user',coords.latitude ,coords.longitude));
    });

   socket.emit('newMessage',generateMessage('Admin','Welcome to chat app'));
   socket.broadcast.emit('newMessage',generateMessage('Admin','New user Joined'));


  });



  app.use(express.static(publicPath));
  //Start the server.
  server.listen(port,()=>{
   console.log(`listening on ${port}`);
  });
