var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 9000;
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs')

app.use('/', function(request, response, next){
    console.log('Request URL '+ request.url);
    next();
});

app.get('/', function(request, response){
    response.send(`<!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <title>Sample Page</title>
        <link rel='stylesheet' type='text/css' href='assets/style.css'>
    </head>
    <body>
        <h1>Hello Motherfucker!</h1>
    </body>
    </html>`);
});

app.get('/person/:id', function(request, response){
    response.send(`<!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <title>Sample Page</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <link rel='stylesheet' type='text/css' media='screen' href='main.css'/>
        <script src='main.js'></script>
    </head>
    <body>
        <h1>Hello ${request.params.id}!</h1>
    </body>
    </html>`);
});

app.get('/person/:id/template', function(request, response){
    response.render('person', {ID: request.params.id, Qstr: request.query.qstr});
});


app.get('/create', function(request, response){
    response.render('index');
});

app.get('/api', function(request, response){
    response.json(
        {
            name: 'Juan',
            lastname: 'Test'
        }
    );
});

app.post('/person', urlencodedParser, function(request, response){
    response.send('Thank you!')
    console.log(request.body.firstname);
    console.log(request.body.lastname);
});

app.post('/personjson', jsonParser, function(req, res) {
	res.send('Thank you for the JSON data!');
	console.log(req.body.firstname);
	console.log(req.body.lastname);
});

app.listen(port);