var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user.model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('form', {submit:false});
});

router.post('/', async(req, res, next)=>{
   await mongoose.connect('mongodb://localhost:27017/anubhav');
   try{
    await User.create({
        name:req.body.Name,
        age:req.body.age,
        gender:req.body.gender,
        phno:req.body.phno,
        email:req.body.email
    })

    res.render('form',{submit:true});
    
   }catch(error){
    res.json({
        status: "Error"
    })
   }
});

module.exports = router;
