const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let TimeTracker = new Schema({
  id: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
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
  hours: {
    type: Number,
  },
  comments: {
    type: String,
  },
  branch: {
    type: String,
  },
  build: {
    type: String,    
  },
  MID: {
    type: String,    
  }
},{
    collection: 'TimeTracker'
});

module.exports = mongoose.model('TimeTracker', TimeTracker);