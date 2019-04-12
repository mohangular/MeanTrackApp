var express = require('express');
var router = express.Router();

var jwt = require('express-jwt');
var auth = jwt({
secret: 'MY_SECRET',
userProperty: 'payload'
});
var  ctrlProfile = newFunction();
router.get('/profile', auth, ctrlProfile.profileRead); 
//require("dotenv").config();

let timetracker = require('../models/timeTracker');
let userDetails = require('../models/userDetails');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'This is the WEB API for Activity Tracker App' });
});

router.route('/notification').get(function (req, res) {
  console.log("am server");
  timetracker.aggregate([{"$match":{"id" :"6"}},{"$group":{"_id" :"$date",sumOfHours:{$sum:"$noOfHours"}}},{"$sort":{"date": -1}},{"$limit":1}])
  .then(timetracker => {
    console.log('am server', timetracker);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({'res': timetracker});
  })
  .catch(err => {
    res.status(404).json({'error': 'unable to find timesheet'});
  });
});

router.route('/register').post(function (req, res) {
  debugger;
  console.log("server",req.body);
  let user = new userDetails(req.body);
  console.log("server",req.body);
  user.save()
    .then(user => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'POST');
      res.status(200).json({'person': 'person in added successfully'});
      
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

router.route('/login').post(function (req, res) {
  debugger;
  console.log('testttttttt');
  console.log("server",req.body);
  let user = new userDetails(req.body);
  console.log("server",req.body);
  user.save()
    .then(user => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'POST');
      res.status(200).json({'person': 'Login done'});
      
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });     
});

module.exports = router;
function newFunction() {
  return require('../controllers/authentication');
}

