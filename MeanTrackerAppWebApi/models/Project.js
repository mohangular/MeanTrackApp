// Project.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Project = new Schema({
  project_name: {
    type: String
  },
  account_name: {
    type: String
  },
  project_id: {
    type: Number
  }
},{
    collection: 'projects'
});

module.exports = mongoose.model('Project', Project);