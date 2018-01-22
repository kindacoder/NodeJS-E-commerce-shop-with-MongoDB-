const mongoose=require('mongoose');
///Connect to Mongodb

const Schema=mongoose.Schema;

const productSchema=new Schema({
  imagePath:{type:String,requires:true},
  title:{type:String,requires:true},
  description:{type:String,requires:true},
  price:{type:Number,requires:true},

})
var Product=mongoose.model('product',productSchema);
module.exports=Product;
