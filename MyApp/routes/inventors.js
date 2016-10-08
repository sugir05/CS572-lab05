var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    var file = require('../inventors.json');
    res.render('inventors', { jfile: file });
});

module.exports = router;