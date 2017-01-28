var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'us-cdbr-iron-east-04.cleardb.net',
    user: 'b15af69be61557',
    password: process.env.PASS || '',
    database: 'heroku_1b8b9ba84effebe'
});

module.exports = connection;