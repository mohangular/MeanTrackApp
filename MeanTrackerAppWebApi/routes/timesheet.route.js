const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var timeTrackers = require('../models/timeTracker');

router.use(bodyParser.json());

//get List of TimeTracker details
router.get('/',(req,res,next)=> {
    timeTrackers.find((err,timeTrackers) => {
        return res.json(timeTrackers);
    });    
});

//add entries for TimeTracker
router.route('/addtimesheet').post((req,res,next) => {
    console.log('router',req.body);   
    timeTrackers.create(req.body)   
    .then( newTimeSheetEntry => {
    // res.setHeader('Access-Control-Allow-Origin','*');
    // res.setHeader('Access-Control-Allow-Methods','POST');
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
  })

module.exports = router;
