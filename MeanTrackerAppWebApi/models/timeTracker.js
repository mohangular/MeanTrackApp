const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let TimeTracker = new Schema({
  id: {
    type: String,
  },
  dateEntered: {
    type: Date,
  },
  moduleSelected:{
    type: String,
  },
  tfsId: {
    type: String,
  },
  typeSelected: {
    type: String,
  },
  resourceName: {
    type: String,
  },
  activitySelected: {
    type: String,
  },
  noOfHours: {
    type: Number,
  },
  comments: {
    type: String,
  },
  branchId: {
    type: String,
  }
},{
    collection: 'timetracker'
});

module.exports = mongoose.model('TimeTracker', TimeTracker);