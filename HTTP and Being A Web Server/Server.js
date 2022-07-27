var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {


    if (request.url === '/') {
        fs.createReadStream(__dirname + '/index.html', 'utf-8').pipe(response);
    }
    else if (request.url === '/api') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        var obj = {
            firstName: 'John',
            lastName: 'Doe'
        }
        response.end(JSON.stringify(obj));
    }
    else{
        response.writeHead(404);
        response.end();
    }


}).listen(12345, '127.0.0.1');