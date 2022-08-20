const studentService = require('./students.service');

module.exports.findAll = async (req, res) => {
    const result = await studentService.findAll();
    res.send(result);
}

module.exports.findOne = async (req, res) => {
    const id = req.params.id;
    const student = await studentService.findOne(id);
    res.json(student)
}

module.exports.insertOne = async (req, res) => {
    const student = await studentService.insertOne(req.body);
    res.json(student);
}

module.exports.deleteOne = async (req, res) => {
    const id = req.params.id;
    await studentService.deleteOne(id);
    res.json({ status: true });
}

module.exports.updateOne = async (req, res) => {

    const id = req.params.id;
    console.log("Update " + req.body._id);
    const student = await studentService.updateOne(id, req.body);
    
    if(!student) {
        res.status(404).send({ error :"Student not found!" });
    } else {
        res.json(student);
    }
}
