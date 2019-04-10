var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

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


const BuildDetails = require('../models/buildDetails');

//const buildDetailsRouter = express.Router();

//buildDetailsRouter.use(bodyParser.json());
router.use(bodyParser.json());

router.route('/buildDetails')
.get((req,res,next) => {
  // BuildDetails.find({})
  //   .then((buildDetails) => {
  //       res.statusCode = 200;
  //       res.setHeader('Content-Type', 'application/json');
  //       res.json(buildDetails);
  //   }, (err) => next(err))
  //   .catch((err) => next(err));

    const data = [
        { buildName: '1284.1', startDate: 'Sat Apr 27 2019', endDate: 'Sat Apr 27 2019', enabled: true },
        { buildName: '1284.2', startDate: 'Sat Apr 27 2019', endDate: 'Sat Apr 27 2019', enabled: true },
        { buildName: '1284.3', startDate: '02/11/2018', endDate: '01/12/2018', enabled: true },
        { buildName: '1284.4', startDate: '02/12/2018', endDate: '01/01/2019', enabled: true },
        { buildName: '1284.5', startDate: '02/01/2019', endDate: '01/02/2019', enabled: false },
        { buildName: '1294.1', startDate: '01/09/2018', endDate: '01/10/2018', enabled: false },
        { buildName: '1294.2', startDate: '02/10/2018', endDate: '01/11/2018', enabled: false },
        { buildName: '1294.3', startDate: '02/11/2018', endDate: '01/12/2018', enabled: false },
        { buildName: '1294.4', startDate: '02/12/2018', endDate: '01/01/2019', enabled: false },
        { buildName: '1284.5', startDate: '02/01/2019', endDate: '01/02/2019', enabled: false },
        { buildName: '1274.1', startDate: '01/09/2018', endDate: '01/10/2018', enabled: false },
        { buildName: '1274.2', startDate: '02/10/2018', endDate: '01/11/2018', enabled: false },
        { buildName: '1274.3', startDate: '02/11/2018', endDate: '01/12/2018', enabled: false },
        { buildName: '1274.4', startDate: '02/12/2018', endDate: '01/01/2019', enabled: false },
        { buildName: '1274.5', startDate: '02/01/2019', endDate: '01/02/2019', enabled: false },
        { buildName: '1384.1', startDate: '01/09/2018', endDate: '01/10/2018', enabled: false },
        { buildName: '1384.2', startDate: '02/10/2018', endDate: '01/11/2018', enabled: false },
        { buildName: '1384.3', startDate: '02/11/2018', endDate: '01/12/2018', enabled: false },
        { buildName: '1384.4', startDate: '02/12/2018', endDate: '01/01/2019', enabled: false },
        { buildName: '1384.5', startDate: '02/01/2019', endDate: '01/02/2019', enabled: false },
        { buildName: '1394.1', startDate: '01/09/2018', endDate: '01/10/2018', enabled: false },
        { buildName: '1394.2', startDate: '02/10/2018', endDate: '01/11/2018', enabled: false },
        { buildName: '1394.3', startDate: '02/11/2018', endDate: '01/12/2018', enabled: false },
        { buildName: '1394.4', startDate: '02/12/2018', endDate: '01/01/2019', enabled: false },
        { buildName: '1384.5', startDate: '02/01/2019', endDate: '01/02/2019', enabled: false },
        { buildName: '1374.1', startDate: '01/09/2018', endDate: '01/10/2018', enabled: false },
        { buildName: '1374.2', startDate: '02/10/2018', endDate: '01/11/2018', enabled: false },
        { buildName: '1374.3', startDate: '02/11/2018', endDate: '01/12/2018', enabled: false },
        { buildName: '1374.4', startDate: '02/12/2018', endDate: '01/01/2019', enabled: false },
        { buildName: '1374.5', startDate: '02/01/2019', endDate: '01/02/2019', enabled: false },
        { buildName: '9284.1', startDate: '01/09/2018', endDate: '01/10/2016', enabled: false },
        { buildName: '9284.2', startDate: '02/10/2018', endDate: '01/11/2016', enabled: false },
        { buildName: '9284.3', startDate: '02/11/2018', endDate: '01/12/2016', enabled: false },
        { buildName: '9284.4', startDate: '02/12/2018', endDate: '01/01/2016', enabled: false },
        { buildName: '9284.5', startDate: '02/01/2019', endDate: '01/02/2016', enabled: false },
        { buildName: '9294.1', startDate: '01/09/2018', endDate: '01/10/2016', enabled: false },
        { buildName: '9294.2', startDate: '02/10/2018', endDate: '01/11/2016', enabled: false },
        { buildName: '9294.3', startDate: '02/11/2018', endDate: '01/12/2016', enabled: false },
        { buildName: '9294.4', startDate: '02/12/2018', endDate: '01/01/2016', enabled: false },
        { buildName: '9284.5', startDate: '02/01/2019', endDate: '01/02/2016', enabled: false },
        { buildName: '9274.1', startDate: '01/09/2018', endDate: '01/10/2016', enabled: false },
        { buildName: '9274.2', startDate: '02/10/2018', endDate: '01/11/2016', enabled: false },
        { buildName: '9274.3', startDate: '02/11/2018', endDate: '01/12/2016', enabled: false },
        { buildName: '9274.4', startDate: '02/12/2018', endDate: '01/01/2016', enabled: false },
        { buildName: '9274.5', startDate: '02/01/2019', endDate: '01/02/2016', enabled: false },
        { buildName: '9384.1', startDate: '01/09/2018', endDate: '01/10/2016', enabled: false },
        { buildName: '9384.2', startDate: '02/10/2018', endDate: '01/11/2016', enabled: false },
        { buildName: '9384.3', startDate: '02/11/2018', endDate: '01/12/2016', enabled: false },
        { buildName: '9384.4', startDate: '02/12/2018', endDate: '01/01/2016', enabled: false },
        { buildName: '9384.5', startDate: '02/01/2019', endDate: '01/02/2016', enabled: false },
        { buildName: '9394.1', startDate: '01/09/2018', endDate: '01/10/2016', enabled: false },
        { buildName: '9394.2', startDate: '02/10/2018', endDate: '01/11/2016', enabled: false },
        { buildName: '9394.3', startDate: '02/11/2018', endDate: '01/12/2016', enabled: false },
        { buildName: '9394.4', startDate: '02/12/2018', endDate: '01/01/2016', enabled: false },
        { buildName: '9384.5', startDate: '02/01/2019', endDate: '01/02/2016', enabled: false },
        { buildName: '9374.1', startDate: '01/09/2018', endDate: '01/10/2016', enabled: false },
        { buildName: '9374.2', startDate: '02/10/2018', endDate: '01/11/2016', enabled: false },
        { buildName: '9374.3', startDate: '02/11/2018', endDate: '01/12/2016', enabled: false },
        { buildName: '9374.4', startDate: '02/12/2018', endDate: '01/01/2016', enabled: false },
        { buildName: '9374.5', startDate: '02/01/2019', endDate: '01/02/2016', enabled: false },
        { buildName: '9684.1', startDate: '01/09/2018', endDate: '01/10/2017', enabled: false },
        { buildName: '9684.2', startDate: '02/10/2018', endDate: '01/11/2017', enabled: false },
        { buildName: '9684.3', startDate: '02/11/2018', endDate: '01/12/2017', enabled: false },
        { buildName: '9684.4', startDate: '02/12/2018', endDate: '01/01/2017', enabled: false },
        { buildName: '9684.5', startDate: '02/01/2019', endDate: '01/02/2017', enabled: false },
        { buildName: '9694.1', startDate: '01/09/2018', endDate: '01/10/2017', enabled: false },
        { buildName: '9694.2', startDate: '02/10/2018', endDate: '01/11/2017', enabled: false },
        { buildName: '9694.3', startDate: '02/11/2018', endDate: '01/12/2017', enabled: false },
        { buildName: '9694.4', startDate: '02/12/2018', endDate: '01/01/2017', enabled: false },
        { buildName: '9684.5', startDate: '02/01/2019', endDate: '01/02/2017', enabled: false },
        { buildName: '9674.1', startDate: '01/09/2018', endDate: '01/10/2017', enabled: false },
        { buildName: '9674.2', startDate: '02/10/2018', endDate: '01/11/2017', enabled: false },
        { buildName: '9674.3', startDate: '02/11/2018', endDate: '01/12/2017', enabled: false },
        { buildName: '9674.4', startDate: '02/12/2018', endDate: '01/01/2017', enabled: false },
        { buildName: '9674.5', startDate: '02/01/2019', endDate: '01/02/2017', enabled: false },
        { buildName: '9684.1', startDate: '01/09/2018', endDate: '01/10/2017', enabled: false },
        { buildName: '9684.2', startDate: '02/10/2018', endDate: '01/11/2017', enabled: false },
        { buildName: '9684.3', startDate: '02/11/2018', endDate: '01/12/2017', enabled: false },
        { buildName: '9684.4', startDate: '02/12/2018', endDate: '01/01/2017', enabled: false },
        { buildName: '9684.5', startDate: '02/01/2019', endDate: '01/02/2017', enabled: false },
        { buildName: '9694.1', startDate: '01/09/2018', endDate: '01/10/2017', enabled: false },
        { buildName: '9694.2', startDate: '02/10/2018', endDate: '01/11/2017', enabled: false },
        { buildName: '9694.3', startDate: '02/11/2018', endDate: '01/12/2017', enabled: false },
        { buildName: '9694.4', startDate: '02/12/2018', endDate: '01/01/2017', enabled: false },
        { buildName: '9684.5', startDate: '02/01/2019', endDate: '01/02/2017', enabled: false },
        { buildName: '9674.1', startDate: '01/09/2018', endDate: '01/10/2017', enabled: false },
        { buildName: '9674.2', startDate: '02/10/2018', endDate: '01/11/2017', enabled: false },
        { buildName: '9674.3', startDate: '02/11/2018', endDate: '01/12/2017', enabled: false },
        { buildName: '9674.4', startDate: '02/12/2018', endDate: '01/01/2017', enabled: false },
        { buildName: '9674.5', startDate: '02/01/2019', endDate: '01/02/2017', enabled: false },
      ];
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(data);
})



module.exports = router;
