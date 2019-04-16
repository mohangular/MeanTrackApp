const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let ActivitySchema = new Schema({
    activityName: {
        type: String
    }
}, {
        collection: 'tblActivityDetails'
    });

module.exports = mongoose.model('activityDetails', ActivitySchema);