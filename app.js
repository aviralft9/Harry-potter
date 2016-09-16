var express = require('express');
var app = express();

var routes = require('./routes');

app.set('view engine', 'ejs');


var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.home);

app.get('/part/:number', routes.part);

app.get('*', routes.notFound);

app.listen(3000);
console.log('server is running on port 3000...');