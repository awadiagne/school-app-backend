const AuthService = require('./auth.service');
module.exports.register = async (req, res) => {
    const data = req.body;
    const user = await AuthService.register(data);
    res.send(user);
}

module.exports.login = async (req, res) => {
    const data = req.body;
    const user = await AuthService.login(data);
    if(!user) {
        res.status(404).send("User not found!");
    } else {
        res.send(user)
    }
}

/** TODO: Delete this function or put it in users module **/ 
module.exports.list = async (req, res) => {
    res.send(await AuthService.listUsers());
}
