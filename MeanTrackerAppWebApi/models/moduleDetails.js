const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let ModuleSchema = new Schema({
    moduleName: {
        type: String
    }
}, {
        collection: 'tblModuleDetails'
    });

module.exports = mongoose.model('moduleDetails', ModuleSchema);