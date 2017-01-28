var connection = require('./connection');

//start connection to database
connection.connect(function(err) {
    if (err) console.error(err);

    console.log("connected to burger DB as %s", connection.threadId);
});

var orm = {
    selectAll: function(table, cb) {
        //console.log("selectAll");
        connection.query('SELECT * FROM ??', [table], function(err, res) {
            if (err) throw err;

            cb(res);
        });
    },
    insertOne: function(newRow, cb) {
        //console.log("insertOne");
        connection.query('INSERT INTO ?? SET ?', newRow, function(err, res) {
            if (err) throw err;

            cb(res);
        });
    },
    updateOne: function(updateRow, cb) {
        console.log("updateOne");
        connection.query('UPDATE ?? SET ? WHERE ?', updateRow, function(err, res) {
            if (err) throw err;

            cb(res);
        });
    }
};

module.exports = orm;