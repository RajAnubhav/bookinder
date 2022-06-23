var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const bookUser = require('../models/book.model');

router.get('/', async(req, res, next) =>{
    await mongoose.connect('mongodb://localhost:27017/anubhav');
    bookUser.find({},(err,docs)=>{
        // res.json(docs)
        const data=docs;
        res.render('book', {data});
     })
});

router.post('/', async(req, res, next)=>{
   await mongoose.connect('mongodb://localhost:27017/anubhav');
   try{
    await bookUser.create({
        bookName:req.body.bookName
    })
    res.redirect("book")
    
   }catch(error){
    res.json({
        status: "Error"
    })
   }
});

module.exports = router;
