const mongoose = require('mongoose');
const Schema = mongoose.Schema;


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
});

module.exports = mongoose.model('UserDetails', UserDetails);