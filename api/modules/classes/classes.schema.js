const Mongoose = require('mongoose');

const classSchema = new Mongoose.Schema({
    name : { type : String },
    size : { type : Number }
});

const model = Mongoose.model('classes', classSchema);
module.exports = model;