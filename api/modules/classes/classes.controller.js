const classService = require('./classes.service');

module.exports.findAll = async (req, res) => {
    const result = await classService.findAll();

    if(!result) {
        res.status(404).send( { error : "Classes not found!" });
    } else {
        res.json(result);
    }
}

module.exports.findOne = async (req, res) => {
    const id = req.params.id;
    console.log("Id " + id);
    const oneClass = await classService.findOne(id);
    
    if(!oneClass) {
        res.status(404).send({ error :"Class not found!" });
    } else {
        res.json(oneClass);
    }
}

module.exports.insertOne = async (req, res) => {
    const oneClass = await classService.insertOne(req.body);
    
    if(!oneClass) {
        res.status(503).send({ error :"Class not inserted"});
    } else {
        res.status(201).send(oneClass);
    }
}

module.exports.deleteOne = async (req, res) => {
    const id = req.params.id;
    await classService.deleteOne(id);
    res.json({ status: true });
}

module.exports.updateOne = async (req, res) => {
    const id = req.params.id;
    console.log("Update " + { body : req.body });
    const oneClass = await classService.updateOne(id, req.body);
    
    if(!oneClass) {
        res.status(404).send({ error :"Class not found!" });
    } else {
        res.json(oneClass);
    }
}
