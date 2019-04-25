const express = require('express');

const dashboardRoutes = express.Router();



// Require Dashboard model in our routes module
let TimeTracker = require('../models/timeTracker');
let ChartData = require('../models/chart');
// Defined get data(index or listing) route
dashboardRoutes.route('/:id').get(function (req, res)  {
    var id = req.params.id;
    console.log(id);
    TimeTracker.aggregate(
        [{
            $match:
            {
                MID:id
            }
        },{
            $group: 
            {
                "_id":{'activity':['$activity']},
                 'totalHours': {$sum: '$hours'}
            }
        }], function (err, result) {
            if(err)
            {console.log(err)}
            else{
                ChartData = JSON.stringify(result);
                console.log(ChartData);
                return res.json(result)
            }
     })

    });

module.exports = dashboardRoutes;