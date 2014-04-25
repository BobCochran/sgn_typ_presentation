
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var errorhandler = require('errorhandler')
var CongroupProvider = require('./app_server/models/congrp')

var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

var MongoBin = require('mongodb').Binary;

var host = process.env['MONGO_NODE_DRIVER_HOST'] != null ? process.env['MONGO_NODE_DRIVER_HOST'] : 'localhost';
var mongoport = process.env['MONGO_NODE_DRIVER_PORT'] != null ? process.env['MONGO_NODE_DRIVER_PORT'] : 27017;

var app = express();

// development only
if ('development' == app.get('env')) {
  app.use(errorhandler());
}

require('./routes') (app)

//app.get('/', routes.index);
//app.get('/users', user.list);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname + '/app_server/views'));
app.set('view engine', 'jade');
app.use(favicon('public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
