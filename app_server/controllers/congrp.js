/* Get 'home' page */
module.exports.homelist = function(req, res) {
    res.render('index', { title: 'Signtyp Imaging Project'} )
}

/* GET 'concept group' page */
module.exports.conceptGroup = function(req, res) {
    res.render('index', { title: 'Concept Group'} )
}