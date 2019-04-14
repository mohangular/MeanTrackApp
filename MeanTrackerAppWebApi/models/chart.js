const mongoose = require('mongoose');
const Model = mongoose.Schema;

// Define collection and schema for Business
let ChartData = new Model({
 activities:[{type: String}],
    hours: {type: Number}
})

module.exports = mongoose.model('ChartData', ChartData);
