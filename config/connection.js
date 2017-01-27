var mysql = require('mysql');
var password = require('./userpass');//for dev only, can comment out

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: password.pass || '',
	database: 'burgers_db'
});

module.exports = connection;