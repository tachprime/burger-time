var mysql = require('mysql');
var connection;

if(process.env.DATABASE_URL) {
    connection = mysql.createConnection(process.env.DATABASE_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: process.env.PASS || '',
        database: 'burgers_db'
    });
}


module.exports = connection;