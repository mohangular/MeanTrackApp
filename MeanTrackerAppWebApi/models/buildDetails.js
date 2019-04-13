const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let BuildDetail = new Schema({
    buildName: {
        type: String
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    enabled: {
        type: Boolean
    }
}, {
        collection: 'buildDetails'
    });

module.exports = mongoose.model('BuildDetail', BuildDetail);