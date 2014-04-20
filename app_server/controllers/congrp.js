/* Get 'home' page */
module.exports.homelist = function(req, res) {
    res.render('index', { title: 'Home'} )
}

/* GET 'concept group' page */
module.exports.conceptGroup = function(req, res) {
    res.render('index', { title: 'Concept Group'} )
}