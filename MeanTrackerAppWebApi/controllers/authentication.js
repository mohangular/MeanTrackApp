var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('UserDetails');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.register = function(req, res) {

  // if(!req.body.name || !req.body.email || !req.body.password) {
  //   sendJSONresponse(res, 400, {
  //     "message": "All fields required"
  //   });
  //   return;
  // }

  var user = new User();
  user._id =  new  mongoose.Types.ObjectId(),
  user.firstName = req.body.firstName,
  user.lastName = req.body.lastName,
  user.email = req.body.email,
  user.mid = req.body.mid,
  //user.password = hash ,
  user.projectName =  req.body.projectName,
  user.projectRole = req.body.projectRole,
  user.managerName = req.body.managerName,
  user.location = req.body.location
  // user.name = req.body.name;
  // user.email = req.body.email;

  user.setPassword(req.body.password);
  console.log(user)
  user.save(function(err) {
    var token;
    token = user.generateJwt();
    res.status(200);
    res.json({
      "token" : token
    });
  });

};

module.exports.login = function(req, res) {
debugger;
  // if(!req.body.email || !req.body.password) {
  //   sendJSONresponse(res, 400, {
  //     "message": "All fields required"
  //   });
  //   return;
  // }

  passport.authenticate('local', function(err, user, info){
    debugger;
    var token;

    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if(user){
      token = user.generateJwt();
      console.log(token);
      res.status(200);
      res.json({
        "token" : token,
        "MID":user.mid
      });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res);

};