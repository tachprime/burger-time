var connection = require('./connection');

connection.connect(function(err) {
    if (err) console.error(err);

    console.log("connected to burger DB as %s", connection.threadId);
});

var orm = {
    selectAll: function(table, cb) {
        console.log("selectAll");
        connection.query('SELECT * FROM ??', [table], function(err, res) {
            if (err) throw err;

            cb(res);
        });
    },
    insertOne: function(table, cb) {
        console.log("insertOne");
        connection.query('SELECT * FROM ?', [table], function(err, res) {
            if (err) throw err;

            cb(res);
        });
    },
    updateOne: function(table, cb) {
        console.log("updateOne");
        connection.query('SELECT * FROM ?', [table], function(err, res) {
            if (err) throw err;

            cb(res);
        });
    }
};

module.exports = orm;