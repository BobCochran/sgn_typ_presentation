/*
 * Route for obtaining the concept groups list or a specific
 * concept group.
 */
var ctrl = require('../app_server/controllers/congrp')

module.exports = function (app) {
    app.get('/', ctrl.homelist)
    app.get('/congrp', ctrl.conceptGroup)
}
