const express = require('express');
const router = express.Router();
var timeTrackerDetails = require('../models/timeTrackerDetails');
var timeTracker = require('../models/timeTracker');

//get List of TimeTracker details
router.get('/',(req,res,next)=> {
    TimeTrackerDetails.find((err,TimeTrackerDetails) => {
        return res.json(TimeTrackerDetails);
    });
});

//add entries for TimeTracker
router.post('/addtimesheet',(req,res,next) => {
    let newTimeSheetEntry = new timeTracker({
        date: req.body.date,
        module: req.body.module,
        tfsId: req.body.tfsId,
        workType: req.body.workType,
        resourceName: req.body.resourceName,
        activity: req.body.activity,
        noOfHours: req.body.noOfHours,
        comments: req.body.comments,
        branch: req.body.branch,
        buildNo: req.body.buildNo,
        branch: req.body.branch,
        MID: req.body.MID
    });
    newTimeSheetEntry.save()
    .then( newTimeSheetEntry => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','POST');
    res.status(200).json({'timesheet': 'TimeSheet entry added successfully'});
    })
    .catch(err => {
        res.status(500).send('Error while adding timesheet entry');
    });
});

module.exports = router;
