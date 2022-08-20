module.exports = (app) => {
    const Ctrl = require('./students.controller');

    app.route('/students')
    .get(Ctrl.findAll)
    .post(Ctrl.insertOne)

    app.route('/students/:id')
    .get(Ctrl.findOne)
    .put(Ctrl.updateOne)
    .delete(Ctrl.deleteOne)
}