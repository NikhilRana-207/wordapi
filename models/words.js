const mongoose = require('mongoose');

const wordSchema = mongoose.Schema({
    serial : {
        type : Number,
        required : true
    },
    word : {
        type : String,
        required : true
    },
    length : {
        type : Number,
        required : true
    }   
})

module.exports = mongoose.model('word', wordSchema);