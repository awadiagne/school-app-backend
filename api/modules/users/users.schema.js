const Mongoose = require('mongoose');

const userSchema = new Mongoose.Schema({
    username : { type : String },
    password : { type : String },
    role : { type : String }
});

const model = Mongoose.model('user', userSchema);
module.exports = model;