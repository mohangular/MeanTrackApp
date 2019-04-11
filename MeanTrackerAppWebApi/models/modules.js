const mongoose = require('mongoose');
const schema = mongoose.schema;
let Modules = new schema({
    id:{
        type: Number,
    },
    moduleName:{
        type: Number,
    }
    },{
        collection: 'modules'
    });    
    module.exports = mongoose.model('modules', Modules);
