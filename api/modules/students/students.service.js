const Student = require('./students.schema');
const Classe = require('../classes/classes.schema');

module.exports.insertOne = async (studentInput) => {
    const student = { ...studentInput};
    const result = await Student.create(student);
    await Classe.findOneAndUpdate({ _id : result.classe }, {$inc : {size : 1}});
    console.log(result);
    return result;
}

module.exports.updateOne = async (id, studentInput) => {
    const student = { ...studentInput};
    const result = await Student.findOneAndUpdate(id, student).populate('classe');
    console.log(result);
    return result;
}

module.exports.findOne = async (id) => {
    return await Student.findOne({_id : id}).populate('classe');
}

module.exports.findAll = async () => {
    return await Student.find().populate('classe');
}

module.exports.deleteOne = async (id) => {
    const student = await this.findOne(id);
    const result = await Student.deleteOne({_id : id});
    await Classe.findOneAndUpdate({ _id : student.classe }, { $inc : { size : -1 } });
    return result;
}