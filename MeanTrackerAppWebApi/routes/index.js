var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'This is the WEB API for Activity Tracker App' });
});

module.exports = router;
