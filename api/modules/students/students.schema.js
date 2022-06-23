const Mongoose = require('mongoose');

const studentSchema = new Mongoose.Schema({
    name : { type : String },
    class : { type : String }
});

const model = Mongoose.model('students', studentSchema);
module.exports = model;