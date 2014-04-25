/*
 * GET the About page.
 */
var ctrl = require('../app_server/controllers/main')

module.exports = function (app) {
    app.get('/about', ctrl.about)
}
