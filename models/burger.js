var orm = require('../config/orm');

var burger = {
    getAllBurgers: function(cb) {
        console.log("getAllBurgers");
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },

    addBurger: function(table, name, cb) {
        console.log("addBurger");
        var newBurger = [
            table, {
                burger_name: name,
                devoured: 0
            }
        ];

        orm.insertOne(newBurger, function(res) {
            cb(res);
        });
    },

    devourBurger: function(cb) {
        console.log("devourBurger");
        orm.updateOne('burgers', function(res) {
            cb(res);
        });
    }
};

module.exports = burger;