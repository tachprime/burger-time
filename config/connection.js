var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: process.env.PASS || '',
        database: 'burgers_db'
    });
}

//start connection to database
connection.connect(function (err) {
    if (err) throw err;

    console.log("connected to burger DB as %s", connection.threadId);
});

module.exports = connection;