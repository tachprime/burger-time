var mysql = require('mysql');
var password = require('./userpass');//TODO replace with env var password @deploy

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: password.pass || '',
	database: 'burgers_db'
});

module.exports = connection;