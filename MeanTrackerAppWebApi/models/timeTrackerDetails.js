const mongoose = require('mongoose');
const timetracker = require('./timeTracker');
const Schema = mongoose.Schema;

var ObjectId = mongoose.Schema.Types.ObjectId;

let TimeTrackerDetails = new Schema({
    id:{
        type: Number,
    },
    moduleName:{
        type: Number,
    },
    // timetracker:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: timetracker        
    // },
    timeTrackerList: [{type: Schema.Types.ObjectId, ref: 'TimeTracker'}],
     //timeTrackerList: [[timetracker]],
    // timeTrackerList: [{
    //     timeTracker: timetracker
    //     }],
    },{
        collection: 'timetrackerdetails'
    });    
    module.exports = mongoose.model('TimeTrackerDetails', TimeTrackerDetails);