var express = require('express');
var router = express.Router();
var burger = require('../models/burger');

router.get('/', function(req, res) {
	burger.getAllBurgers(function(res){
		console.log(res);
	});
    res.send("home");
});


module.exports = router;