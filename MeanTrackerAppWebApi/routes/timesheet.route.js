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

module.exports = router;
