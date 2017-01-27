var express = require('express');
var app = express();
var hbs = require('express-handlebars');
var burgersController = require('./controllers/burgers_controller');

app.engine('handlebars', hbs({defaultlayout: 'main'}));
app.set('port', 8080);
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use('/', burgersController);

app.listen(app.get('port'), function() {
	console.log("server ready on http://localhost:%s", app.get('port'));
});