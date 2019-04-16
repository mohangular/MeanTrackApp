const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var crypto = require('crypto');
var jwt = require('jsonwebtoken');


// Define collection and schema for Business
let UserDetails = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  name: {
    type: String,  
  },
  emailId: {
    type: String,
  },
  email: {
    type: String,
  },
  mid: {
    type: String,
  },
  password: {
    type: String,
  },
  projectName: {
    type: String,
  },
  projectRole: {
    type: String,
  },
  managerName: {
    type: String,
  },
  location: {
    type: String,
  }
}, {
    collection: 'userDetails'  
  });

UserDetails.methods.setPassword = function(password){
  debugger;
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

UserDetails.methods.validPassword = function(password) {
  debugger;
  this.salt = crypto.randomBytes(16).toString('hex');
  console.log(password);
  console.log(this.salt);
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  
  return this.hash === hash;
};

UserDetails.methods.generateJwt = function() {
  debugger;
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

module.exports = mongoose.model('UserDetails', UserDetails);