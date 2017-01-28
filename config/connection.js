var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'burgersAdmin',
    port: 3306,
    password: process.env.PASS || '',
    database: 'burgers_db'
});

module.exports = connection;