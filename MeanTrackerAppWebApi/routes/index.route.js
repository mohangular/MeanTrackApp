var express = require('express');
var router = express.Router();
let timetracker = require('../models/timeTracker');
let userDetails = require('../models/userDetails');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'This is the WEB API for Activity Tracker App' });
});
router.route('/notification').get(function (req, res) {
  console.log("am server");
  timetracker.aggregate([{"$match":{"id" :"6"}},{"$group":{"_id" :"$dateEntered",sumOfHours:{$sum:"$noOfHours"}}},{"$sort":{"dateEntered": -1}},{"$limit":1}])
  .then(timetracker => {
    console.log('am server', timetracker);
    //res.status(200).json({'res': timetracker});
    // var obj=JSON.parse(timetracker);
    // console.log(obj);
    // var date = obj._id;
    // console.log(date);
    // var time = obj.sumOfHours;
    // console.log(time);  
    //var obj=JSON.parse(timetracker);
    //res.setHeader('Content-Type', 'application/json');
    //res.status(200).json({'res': timetracker});

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({'res': timetracker});
  })
  .catch(err => {
    res.status(404).json({'error': 'unable to find timesheet'});
  });
});
module.exports = router;
