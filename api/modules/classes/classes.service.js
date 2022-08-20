const classService = require('./classes.schema');
const Student = require('../students/students.schema');

module.exports.insertOne = async (classInput) => {
    const oneClass = { ...classInput};
    const result = await classService.create(oneClass);
    console.log(result);
    return result;
}

module.exports.updateOne = async (id, classInput) => {
    const oneClass = { ...classInput};
    const result = await classService.findOneAndUpdate({ _id: id }, oneClass);
    console.log(result);
    return result;
}

module.exports.findOne = async (id) => {
    return await classService.findOne({_id : id});
}

module.exports.findAll = async () => {
    return await classService.find();
}

module.exports.deleteOne = async (id) => {
    await Student.deleteMany({classe : id});
    return await classService.deleteOne({_id : id});
}