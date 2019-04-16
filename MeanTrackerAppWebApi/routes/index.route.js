var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/userDetails');
const bcrypt = require('bcrypt');
var jwt = require('express-jwt');
const jwttoken = require('jsonwebtoken');
var auth = jwt({
secret: 'MY_SECRET',
userProperty: 'payload'
});
//var  ctrlProfile = newFunction();
var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
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

router.post('/register', function(req, res) {  
  bcrypt.hash(req.body.password, 10, function(err, hash){
     if(err) {
        return res.status(500).json({
           error: err
        });
     }
     else {
        const user = new userDetails({
           _id: new  mongoose.Types.ObjectId(),
           firstName: req.body.firstName,
           lastName: req.body.lastName,
           email: req.body.email,
           mid: req.body.email,
           password: hash ,
           projectName: req.body.projectName,
           projectRole: req.body.projectRole,
           managerName: req.body.managerName,
           location: req.body.location
        });         
        user.save().then(function(result) {
           console.log("res", result);
           res.setHeader('Access-Control-Allow-Origin', '*');
           res.setHeader('Access-Control-Allow-Methods', 'POST');
           if(result) {
               const JWTToken = jwttoken.sign({
                    email: user.email,
                    _id: user._id
                  },
                  'secret',
                   {
                     expiresIn: '2h'
                   });
                   return res.status(200).json({
                     success: 'Welcome to the JWT Auth',
                     token: JWTToken
                   });
              }
          //  res.status(200).json({
          //     success: 'New user has been created'
          //  }
          res.status(200).json({'person': 'person in added successfully'});            
        }).catch(error => {
            console.log(error);
          //  res.status(500).json({
          //     error: err
          //  });
          res.status(400).send("unable to save to database");           
        });
     }
  });
});
// router.route('/register').post(function (req, res) {  
//   console.log("server",req.body);
//   let user = new userDetails(req.body);
//   console.log("server",req.body);
//   user.save()
//     .then(user => {
//       res.setHeader('Access-Control-Allow-Origin', '*');
//       res.setHeader('Access-Control-Allow-Methods', 'POST');
//       res.status(200).json({'person': 'person in added successfully'});
      
//     })
//     .catch(err => {
//     res.status(400).send("unable to save to database");
//     });
// });
// router.post('/register', function(req, res) {  
//   bcrypt.hash(req.body.password, 10, function(err, hash){
//      if(err) {
//         return res.status(500).json({
//            error: err
//         });
//      }
//      else {
//         const user = new userDetails({
//            _id: new  mongoose.Types.ObjectId(),
//            firstName: req.body.firstName,
//            lastName: req.body.lastName,
//            email: req.body.email,
//            mid: req.body.email,
//            password: hash ,
//            projectName: req.body.projectName,
//            projectRole: req.body.projectRole,
//            managerName: req.body.managerName,
//            location: req.body.location
//         });         
//         user.save().then(function(result) {
//            console.log(result);
//            res.setHeader('Access-Control-Allow-Origin', '*');
//            res.setHeader('Access-Control-Allow-Methods', 'POST');
//            if(result) {
//                const JWTToken = jwttoken.sign({
//                     email: user.email,
//                     _id: user._id
//                   },
//                   'secret',
//                    {
//                      expiresIn: '2h'
//                    });
//                    return res.status(200).json({
//                      success: 'Welcome to the JWT Auth',
//                      token: JWTToken
//                    });
//               }
//           //  res.status(200).json({
//           //     success: 'New user has been created'
//           //  }
//           res.status(200).json({'person': 'person in added successfully'});            
//         }).catch(error => {
//             console.log(error);
//           //  res.status(500).json({
//           //     error: err
//           //  });
//           res.status(400).send("unable to save to database");           
//         });
//      }
//   });
// });
router.get('/getUserList',(req,res,next)=> {
  userDetails.find((err,userdetail) => {
  return res.json(userdetail);
  }); 
}); 

// router.route('/login').post(function (req, res) {
//   debugger;
//   console.log('testttttttt');
//   console.log("server",req.body);
//   let user = new userDetails(req.body);
//   console.log("server",req.body);
//   user.save()
//     .then(user => {
//       res.setHeader('Access-Control-Allow-Origin', '*');
//       res.setHeader('Access-Control-Allow-Methods', 'POST');
//       res.status(200).json({'person': 'Login done'});
      
//     })
//     .catch(err => {
//     res.status(400).send("unable to save to database");
//     });     
// });

// router.post('/login', function(req, res){
//   User.findOne({email: req.body.email})
//   .exec()
//   .then(function(user) {
//      bcrypt.compare(req.body.password, user.password, function(err, result){
//        console.log(result);
//        //console.log(err);
//         if(err) {
//            return res.status(401).json({
//               failed: 'Unauthorized Access'
//            });
//         }
//         if(result) {
//            return res.status(200).json({
//               success: 'Welcome to the JWT Auth'
//            });
//         }
//         return res.status(401).json({
//            failed: 'Unauthorized Access'
//         });
//      });
//   })
//   .catch(error => {
//      res.status(500).json({
//         error: error
//      });
//   });;
// });

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;



//module.exports = router;
// function newFunction() {
//   return require('../controllers/authentication');
// }

