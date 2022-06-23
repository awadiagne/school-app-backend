const User = require('./users.schema');

module.exports.insertOne = async (userInput) => {
    const user = { ...userInput, role: 'USER'};
    const result = await User.create(user);
    console.log(result);
    return result;
}

module.exports.findOneByUsername = async (username) => {
    return await User.findOne({username : username});
}

module.exports.list = async () => {
    return await User.find();
}