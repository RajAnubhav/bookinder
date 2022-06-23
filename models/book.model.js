const mongoose = require('mongoose');
const bookUser = new mongoose.Schema({
    bookName:{type:String}
},
{collection:"books"});

const bookModel = mongoose.model('bookName', bookUser)
module.exports = bookModel