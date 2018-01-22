const express=require('express');
const router=express.Router();
var Product=require('../models/product');




//Get home page:
router.get('/',(req,res)=>{
  Product.find(function(err,docs){
    res.render('shop/test',{products:docs});
  });

})

module.exports=router;
