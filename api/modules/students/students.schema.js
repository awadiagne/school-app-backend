const Mongoose = require('mongoose');

const studentSchema = new Mongoose.Schema({
    name : { type : String },
    classID : { 
        type: Mongoose.SchemaTypes.ObjectId,
        ref : "Classe", 
    }, 
});

const model = Mongoose.model('students', studentSchema);
module.exports = model;