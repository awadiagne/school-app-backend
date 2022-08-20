const Mongoose = require('mongoose');

const studentSchema = new Mongoose.Schema({
    name : { type : String },
    classe : { 
        type: Mongoose.SchemaTypes.ObjectId,
        ref : "classes", 
    }, 
});

const model = Mongoose.model('students', studentSchema);
module.exports = model;