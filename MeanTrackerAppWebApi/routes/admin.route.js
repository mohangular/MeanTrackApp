var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
const bodyParser = require('body-parser');

let timetracker = require('../models/ActivityDetail');
let userDetails = require('../models/userDetails');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'This is the WEB API for Activity Tracker App' });
});
router.route('/notification').get(function (req, res) {
  console.log("am server");
  timetracker.aggregate([{ "$match": { "id": "6" } }, { "$group": { "_id": "$dateEntered", sumOfHours: { $sum: "$noOfHours" } } }, { "$sort": { "dateEntered": -1 } }, { "$limit": 1 }])
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
      res.status(200).json({ 'res': timetracker });
    })
    .catch(err => {
      res.status(404).json({ 'error': 'unable to find timesheet' });
    });
});


const BuildDetails = require('../models/buildDetails');

//const buildDetailsRouter = express.Router();

//buildDetailsRouter.use(bodyParser.json());
router.use(bodyParser.json());

router.route('/buildDetails')
  .get((req, res, next) => {
    BuildDetails.find({})
      .then((buildDetails) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(buildDetails);
      }, (err) => next(err))
      .catch((err) => next(err));
  })
  .post((req, res, next) => {
    BuildDetails.create(req.body)
      .then((buildDetail) => {
        console.log('Build Information Added :', buildDetail);
        BuildDetails.find({})
          .then((buildDetails) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(buildDetails);
          }, (err) => next(err))
          .catch((err) => next(err));
      }, (err) => next(err))
      .catch((err) => next(err));
  })
  .put((req, res, next) => {
    BuildDetails.update({ _id: req.body._id }, req.body)
      .then((buildDetail) => {
        console.log('Build Information Added :', buildDetail);
        BuildDetails.find({})
          .then((buildDetails) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(buildDetails);
          }, (err) => next(err))
          .catch((err) => next(err));
      }, (err) => next(err))
      .catch((err) => next(err));
  })
router.route('/buildDetails/:ids')
  .delete((req, res, next) => {
    let ids = String(req.params.ids).split(',');
    BuildDetails.deleteMany({ _id: { $in: ids } })
      .then((buildDetail) => {
        console.log('Build Information Deleted :', ids);
        BuildDetails.find({})
          .then((buildDetails) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(buildDetails);
          }, (err) => next(err))
          .catch((err) => next(err));
      }, (err) => next(err))
      .catch((err) => console.log(err));
  })



module.exports = router;
