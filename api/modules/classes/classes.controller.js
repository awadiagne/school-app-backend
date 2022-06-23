const classService = require('./classes.service');

module.exports.findAll = async (req, res) => {
    const result = await classService.findAll();
    res.send(result);
}

module.exports.findOne = async (req, res) => {
    const id = req.params.id;
    const oneClass = await classService.findOne(id);
    res.json(oneClass)
}

module.exports.insertOne = async (req, res) => {
    const oneClass = await classService.insertOne(req.body);
    res.json(oneClass);
}

module.exports.deleteOne = async (req, res) => {
    const id = req.params.id;
    await classService.deleteOne(id);
    res.json({ status: true });
}

module.exports.updateOne = async (req, res) => {
    const oneClass = await classService.updateOne(req.body);
    res.json(oneClass);
}
