const Class = require('./students.schema');

module.exports.insertOne = async (classInput) => {
    const oneClass = { ...classInput};
    const result = await Class.create(oneClass);
    console.log(result);
    return result;
}

module.exports.updateOne = async (classInput) => {
    const oneClass = { ...classInput};
    const result = await Class.updateOne(oneClass);
    console.log(result);
    return result;
}

module.exports.findOne = async (id) => {
    return await Class.findOne({_id : id});
}

module.exports.findAll = async () => {
    return await Class.find();
}

module.exports.deleteOne = async (id) => {
    return await Class.deleteOne({_id : id});
}