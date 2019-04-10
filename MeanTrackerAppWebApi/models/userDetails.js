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
  emailId: {
    type: String,
  },
  mid:{
    type: String,
  },
  password:{
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
},{
    collection: 'userDetails'
},setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
},validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
},generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000),
  }, "SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
});

module.exports = mongoose.model('UserDetails', UserDetails);