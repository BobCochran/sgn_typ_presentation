/* Get 'home' page */
module.exports.homelist = function(req, res) {
    CongroupProvider(function(err, grps) {
        res.render('index', {
            title: 'Signtyp Imaging Project Concept Groups',
            congrp:grps
        })
    })

}

/* GET 'concept group' page */
module.exports.conceptGroup = function(req, res) {
    res.render('index', { title: 'Concept Group'} )
}