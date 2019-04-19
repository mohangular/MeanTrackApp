const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var timeTrackers = require('../models/timeTracker');
var BuildDetails = require('../models/buildDetails');
var Promise = require("bluebird");
var workItemDetails = require('../models/workItemDetails');
var moduleDetails = require('../models/moduleDetails');
var ActivityDetail = require('../models/activityDetails');

router.use(bodyParser.json());

//get List of TimeTracker details
router.get('/:selectedDate',(req,res,next)=> {
  timeTrackers.find((err,timeTrackers) => {
    let selectDate = new Date(req.params.selectedDate).toLocaleDateString();    
      var timeTrackerDetails = timeTrackers.filter(function(value){ return new Date(value.date).toLocaleDateString() == selectDate;})
     return res.json(timeTrackerDetails);
  });
});

//add entries for TimeTracker
router.route('/addtimesheet').post((req, res, next) => {
  console.log('router', req.body);
  timeTrackers.create(req.body)
    .then(newTimeSheetEntry => {
     res.status(200).json({'timesheet': 'TimeSheet entry added successfully'});
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('Error while adding timesheet entry');
    });
});


router.route('/update').put((req, res, next) => {
  console.log(req.body._id);
  timeTrackers.updateOne({ _id: req.body._id }, req.body)
    .then((timeTracker) => {
     console.log('Build Information Added :', timeTracker);
      timeTrackers.find({})
        .then((timetracks) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(timetracks);
        }, (err) => next(err))
        .catch((err) => next(err));
    }, (err) => next(err))
    .catch((err) => next(err));
});

router.route('/delete/:id').delete((req, res, next) => {
  let id = req.params.id;
  timeTrackers.deleteOne({ _id: id })
    .then((timetracker) => {
      console.log('TimeTracker deleted id:', id);
      timeTrackers.find({})
        .then((timeTracks) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(timeTracks);
        }, (err) => next(err))
        .catch((err) => next(err));
    }, (err) => next(err))
    .catch((err) => console.log(err));
});
router.route('/login').post(function (req, res) {
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

//get List of TimeTracker details
router.route('/onLoadDetails').get(function(req,res,next) {  
  try {
  var promise = new Promise(function(resolve, reject){
  timeTrackers.find((err,timeTrackers) => {
          var todaysDate = new Date().toLocaleDateString();
          var timeTrackerforSelectedDate =   timeTrackers.filter(function(value){ return new Date(value.date).toLocaleDateString() === todaysDate;})
      resolve(timeTrackerforSelectedDate)
  })  
})
promise.then(function(value){
 
  //get build info
  var buildInfo;
  var buildPromise = new Promise(function(resolve,reject){
    BuildDetails.find((err, BuildDetails) => {
      buildInfo = BuildDetails.filter(function(value) {return value.enabled === true;})
      resolve(buildInfo)
    })
  })
  buildPromise.then(function(buildValue){
  
    var workItemPromise = new Promise(function(resolve,reject){
    workItemDetails.find({})
      .then(item => {
        resolve(item);
      }, (err) => next(err))
      .catch((err) => next(err));
    })
    workItemPromise.then(function(workItem){
    
    var modulePromise = new Promise(function(resolve,reject){
      moduleDetails.find({})
      .then(item => {
        resolve(item);  
      }, (err) => next(err))
      .catch((err) => next(err));  
    })
    modulePromise.then(function(moduleItemValue){

    var activityPromise = new Promise(function(resolve,reject){
      ActivityDetail.find({})
      .then(activityItem => {
        resolve(activityItem);
      }, (err) => next(err))
      .catch((err) => next(err));
    })
    activityPromise.then(function(activityValue){
      res.statusCode = 200;
      res.json({"timeTracker": value, "build": buildValue, "workItem": workItem, "module":moduleItemValue, "activity":activityValue})
    }, function(activityError){

    });
    },function(moduleError){
      
    });     
    },function(workItemError){
      // deal with error
     });   
 }, function(buildError){
  // deal with error
 });
}, function(timeTrackerError){
// deal with error
});

 } catch (error) {
   next(error);
 }
});

module.exports = router;
