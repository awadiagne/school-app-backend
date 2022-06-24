module.exports = (app) => {
    const Ctrl = require('./classes.controller');

    app.route('/classes')
    .get(Ctrl.findAll)
    .post(Ctrl.insertOne)

    app.route('/classes/:id')
    .get(Ctrl.findOne)
    .delete(Ctrl.deleteOne)
    .put(Ctrl.updateOne)
}