const express=require('express');
const router=express.Router();
var User=require('../../models/user');
var csrf=require('csurf');
var csrfProtection=csrf();
router.use(csrfProtection);



///All the requests :-

router.get('/signup',(req,res)=>{
  res.render('user/signup',{csrfToken:req.csrfToken()});
})


router.get('/signin',(req,res)=>{
  res.render('user/signin');
})

router.post('/signup',(req,res)=>{
  res.redirect('/');
})






module.exports=router;
