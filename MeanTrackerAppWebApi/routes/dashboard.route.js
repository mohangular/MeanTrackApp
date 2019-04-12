const express = require('express');
const app = express();
const dashboardRoutes = express.Router();

// Require Dashboard model in our routes module
let Dashboard = require('../models/timeTracker');

// Defined get data(index or listing) route
dashboardRoutes.route('/').get(function (req, res) {
    Dashboard.find(function (err, activities){
    if(err){
      console.log(err);
    }
    else {
      res.json(activities);
    }
  });
});


module.exports = dashboardRoutes;