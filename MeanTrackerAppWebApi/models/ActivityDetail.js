const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let ActivityDetail = new Schema({
  id: {
    type: String,
  },
  date: {
    type: Date,
  },
  module:{
    type: String,
  },
  tfsId: {
    type: String,
  },
  workType: {
    type: String,
  },
  resourceName: {
    type: String,
  },
  activity: {
    type: String,
  },
  noOfHours: {
    type: Number,
  },
  comments: {
    type: String,
  },
  branch: {
    type: String,
  },
  buildNo: {
    type: Number,    
  },
  branch: {
    type: String,    
  },
  MID: {
    type: String,    
  }
},{
    collection: 'ActivityDetail'
});

module.exports = mongoose.model('ActivityDetail', ActivityDetail);