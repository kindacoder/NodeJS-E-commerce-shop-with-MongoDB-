var mongoose=require('mongoose');
const Schema=mongoose.Schema;


const userSchema=({
  name:{type:String,requires:true},
  email:{type:String,requires:true},
  password:{type:String,requires:true},
  mobile:{type:Number,requires:true}
})

var User=mongoose.model('user',userSchema);

module.exports=User;
