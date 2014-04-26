/* CongroupProvider2 must be constructed with a connected database

 */
function CongroupProvider2(db) {

    var collection = db.collection('congrp')

    this.getCongroups = function(callback) {
    collection.find( {}, { "cgrp_num_int" : 1, "cgrp_text" : 1, "_id" : 0 }, { sort: { "cgrp_num_int" : 1 } })
        .toArray( function(err, docs) {
            if (err) {
                return callback(err, null)
            }
            else {

                docs.forEach(function(entry) {
                    console.log(entry.cgrp_num_int + " " + entry.cgrp_text)
                })
                callback(null, docs)
            }
        })
}
}
module.exports.CongroupProvider2 = CongroupProvider2