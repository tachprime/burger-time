var express = require('express');
var router = express.Router();
var burger = require('../models/burger');

router.get('/', function(req, res) {
    burger.getAllBurgers(function(res) {
        console.log(res);
    });
    res.render('index', {hello:"hello"});
});

router.post('/add', function(req, res) {
    console.log("add burger to db");

    res.send("add burger to db");
});

router.post('/devour', function(req, res) {
    console.log("eating a burger");

    res.send("eating a burger");
});

module.exports = router;