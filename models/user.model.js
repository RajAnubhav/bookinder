const mongoose = require('mongoose');
const User = new mongoose.Schema({
    // {"Name":"sdlfj","age":"23","gender":"male","phno":"32-983980982309","email":"ijijij"}
    name:{type:String},
    age:{type:Number},
    gender:{type:String},
    phno:{type:Number},
    email:{type:String}
},
{collection: 'book_castle'},)

const myModel = mongoose.model('ModelName', User);
module.exports = myModel