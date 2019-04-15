const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let WorkItemSchema = new Schema({
    workItem: {
        type: String
    }
}, {
        collection: 'tblWorkItemDetails'
    });

module.exports = mongoose.model('workItemDetails', WorkItemSchema);