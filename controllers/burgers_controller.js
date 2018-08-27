const express = require('express');
const burger = require('../models/burger.js');
var router = express.Router();

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', function (req, res) {
    res.render('index.handlebars');
});


module.exports = router;

