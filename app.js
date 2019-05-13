const express=require('express');
const mongoose=require('mongoose');
var keys=require('./config/keys/keys');
var session=require('express-session');
var bodyParser=require('body-parser');
var cookieParser=require('cookie-parser');
const mainRoute=require('./routes');
const userRoute=require('./routes/user-route');
var passport=require('passport');
var flash=require('connect-flash');
var validator=require('express-validator');


const app=express();

///Connect to Mongodb
mongoose.connect('mongodb://localhost:27017/kindashop',()=>{
  console.log('Connected to database');
})
require('./config/passport');
app.use('/public',express.static('public'));

app.set('view engine','ejs');


//Using all the mddlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
ap.use(validator());
app.use(cookieParser());
app.use(session({secret:'AshutoshNewEcommerceWebsite',resave:false,saveUninitialized:false}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

var title='express';
///set Router
app.use('/',mainRoute);
app.use('/user',userRoute);

//listen to server
app.listen('3000',(req,res)=>{
  console.log('Server Started at port no 3000');
})
