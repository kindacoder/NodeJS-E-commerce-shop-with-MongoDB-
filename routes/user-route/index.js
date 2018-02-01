const express=require('express');
const router=express.Router();
var csrf=require('csurf');
var csrfProtection=csrf();
router.use(csrfProtection);
var passport=require('passport');
var User=require('../../models/user');

///All the requests :-

router.get('/signup',(req,res)=>{
  res.render('user/signup',{csrfToken:req.csrfToken()});
})


router.get('/signin',(req,res)=>{
  res.render('user/signin');
})

router.post('/signup', passport.authenticate('local-signup',{
  successRedirect : '/user/profile', // redirect to the secure profile section
       failureRedirect : '/user/signup', // redirect back to the signup page if there is an error
       failureFlash : true // allow flash messages
}))


router.get('/profile',(req,res)=>{
  res.render('user/profile');
})


module.exports=router;
