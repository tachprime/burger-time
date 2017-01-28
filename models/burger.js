const orm = require('../config/orm');

var table = 'burgers';

var burger = {
    getAllBurgers: function(cb) {
        //console.log("getAllBurgers");
        orm.selectAll(table, function(res) {
            cb(res);
        });
    },

    addBurger: function(name, cb) {
        //console.log("addBurger");
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

    devourBurger: function(ateBurger, cb) {
        console.log("devourBurger");
        var eatenBurger = [
            table, {
                devoured: ateBurger.devoured
            }, {
                id: ateBurger.id
            }
        ];

        orm.updateOne(eatenBurger, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;