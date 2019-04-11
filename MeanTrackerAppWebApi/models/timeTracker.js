const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let TimeTracker = new Schema({
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
    collection: 'timetracker'
});

module.exports = mongoose.model('TimeTracker', TimeTracker);