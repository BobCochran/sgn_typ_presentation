/**
 * Created by Bob Cochran on 2014-02-27.
 * This will be the main SignTyp Imaging Project application file. The database backend is a separate
 * project, sgntyp_database.
 *
 */
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

