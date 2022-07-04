const Mongoose = require('mongoose');

const classSchema = new Mongoose.Schema({
    id : { type : Number },
    name : { type : String },
    size : { type : Number }
});

const model = Mongoose.model('classes', classSchema);
module.exports = model;