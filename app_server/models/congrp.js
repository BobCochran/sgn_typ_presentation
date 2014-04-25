var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

var host = process.env['MONGO_NODE_DRIVER_HOST'] != null ? process.env['MONGO_NODE_DRIVER_HOST'] : 'localhost';
var mongoport = process.env['MONGO_NODE_DRIVER_PORT'] != null ? process.env['MONGO_NODE_DRIVER_PORT'] : 27017;

console.log("Connecting to " + host + ":" + mongoport);

MongoClient.connect(format("mongodb://%s:%s/sgtypdb2?journal=true", host, mongoport), function(err, db) {
    if (err) {
        throw err
        return
    }

    var collection = db.collection('congrp')

    collection.find( {}, { "cgrp_num_int" : 1, "cgrp_text" : 1, "_id" : 0 }, { sort: { "cgrp_num_int" : 1 } })
        .toArray( function(err, docs) {
            if (err) {
                return err
            }
            else {
                db.close()
                docs.forEach(function(entry) {
                    console.log(entry.cgrp_num_int + " " + entry.cgrp_text)
                })
                return(null, docs)
            }
        })
})