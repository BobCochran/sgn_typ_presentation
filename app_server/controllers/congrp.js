CongroupProvider2 = require('../models/CongroupProvider2').CongroupProvider2

/* Get 'home' page */
module.exports.homelist = function(req, res) {

    var cgroups = new CongroupProvider2(db)

    cgroups.getCongroups(function (err,results) {
        if (err) return err
        res.render('index', {
            title: 'Signtyp Imaging Project Concept Groups',
            congrp:results
        })
    })
}

/* GET 'concept group' page */
module.exports.conceptGroup = function(req, res) {
    res.render('index', { title: 'Concept Group'} )
}