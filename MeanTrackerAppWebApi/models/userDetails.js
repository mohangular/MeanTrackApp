const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');

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
  },
  salt:{
    type:String
  },
  password:{
    type:String
  }
}, {
    collection: 'userDetails'  
  });

UserDetails.methods.setPassword = function(password){    
  this.salt = crypto.randomBytes(16).toString('hex');
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  this.password = hash;
  //window.localStorage.setItem('salt', this.salt);
};

UserDetails.methods.validPassword = function(password) {  
  //this.salt = crypto.randomBytes(16).toString('hex');  
  //this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');  
  //this.salt = localStorage.getItem('salt');
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  
  return this.password === hash;
};

UserDetails.methods.generateJwt = function() {  
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    mid:this.mid,
    exp: parseInt((expiry.getTime() / 1000).toString()),
  }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

module.exports = mongoose.model('UserDetails', UserDetails);