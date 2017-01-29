var connection = require('./connection');

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
        //console.log("updateOne");
        connection.query('UPDATE ?? SET ? WHERE ?', updateRow, function(err, res) {
            if (err) throw err;

            cb(res);
        });
    }
};

module.exports = orm;