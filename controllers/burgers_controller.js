const express = require('express');
const burger = require('../models/burger.js');
var router = express.Router();

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', function (req, res) {
    burger.selectAll(function(data) {
        var obj = {
            burgers: data
        };
        res.render('index.handlebars', obj);
        console.log(obj);
    });
});

router.post('/burgers', function(req, res) {
    burger.insertOne(req.body.burger_name, function(data) {
      res.redirect('/');
    });
  });

router.post('/burgers/:id', function(req, res) {
    console.log(req.params.id);
    burger.updateOne(1 ,req.params.id, function(data) {
      res.redirect('/');
    });
  });


module.exports = router;

