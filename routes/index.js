
/*
 * Reference main.js and pass through whatever main.js is exporting back
 * up to app.js.
 *
 */
var ctrl = require('../app_server/controllers/main');

module.exports = function (app) {
    require('./main') (app)
    require('./congrp') (app)
}
