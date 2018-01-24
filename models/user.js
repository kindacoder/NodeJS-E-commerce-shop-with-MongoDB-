var mongoose=require('mongoose');
const Schema=mongoose.Schema;

///using bcrypt to hash passwords:-
var bcrypt=require('bcrypt-nodejs');

const userSchema=new Schema({
  name:{type:String,requires:true},
  email:{type:String,requires:true},
  password:{type:String,requires:true},
  mobile:{type:Number,requires:true}
})


userSchema.methods.encryptPassword=function(password){
  return bcrypt.hashSync(password,bcrypt.genSaltSync(5),null);
}
userSchema.methods.validPassword=function(password){
  return bcrypt.compareSync(password,this.password);
}

var User=mongoose.model('user',userSchema);

module.exports=User;
