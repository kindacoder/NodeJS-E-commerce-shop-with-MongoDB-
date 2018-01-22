const express=require('express');
const mongoose=require('mongoose');
var keys=require('./config/keys/keys');

const mainRoute=require('./routes');

const app=express();

///Connect to Mongodb
mongoose.connect('mongodb://localhost:27017/kindashop',()=>{
  console.log('Connected to database');
})
app.use('/public',express.static('public'));

app.set('view engine','ejs');

var title='express';
///set Router
app.use('/',mainRoute);




//listen to server
app.listen('3000',(req,res)=>{
  console.log('Server Started at port 3000');
})
