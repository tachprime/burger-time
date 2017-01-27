var orm = require('../config/orm');

var burger = {
    getAllBurgers: function(cb) {
    	console.log("getAllBurgers");
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    addABurger: function (cb) {
    	console.log("addABurger");
        orm.insertOne('burgers', function(res) {
            cb(res);
        });
    },
    devourBurger: function (cb) {
    	console.log("devourBurger");
        orm.updateOne('burgers', function(res) {
            cb(res);
        });
    }
};

module.exports = burger;