const path = require('path');

const express = require('express');

var app =express();

const publicPath = path.join(__dirname,'../public');
const port=process.env.PORT || 3000;


app.use(express.static(publicPath));

app.listen(port,()=>{
 console.log('wellcome');

});

//
// console.log(publicPath);
// console.log(__dirname + '../public');

//
// const path=require('path');
// const express=require('express');
//
// const publicPath=path.join(__dirname,'../public');
// const port=process.env.PORT || 3000;
//
// var app=express();
//
// app.use(express.static(publicPath));
//
// app.listen(3000,()=>{
//  console.log('wellcome');
//
// });
//
// console.log(__dirname + '../public');
// console.log();
