var passport=require('passport');
var User=require('../models/user');
var LocalStratey=require('passport-local').Strategy;


// used to serialize the user for the session
   passport.serializeUser(function(user, done) {
       done(null, user.id);
   });

   // used to deserialize the user
   passport.deserializeUser(function(id, done) {
       User.findById(id, function(err, user) {
           done(err, user);
       });
   });

   // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'


passport.use('local-signup', new LocalStratey({
  usernameField:'email',
  passwordField:'password',
  passReqToCallback:true  ///allows us to pass back the entire request to the passReqToCallback
},
function(req,email,password,done){
  //asynchronous process
  //User.findOne wont fire unless data is sent back

  // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists

User.findOne({'email':email},function(err,user){
  //if errors return them
  if(err){
    return done(err);
  }
  if(user){
    return done(null,false,{message:'Email already exists Yr! '})
  }else{
     //if there is no user with that Email
     ///create the user:
     var newUser=new User();

       newUser.name=name,
       newUser.email=email,
       newUser.password=newUser.encryptPassword(password),
       newUser.mobile=mobile

     newUser.save(function(err,result){
       if(err){
         return done(err);
       }else{
         return done(null,newUser)
       }
     })
  }
})
}
))
