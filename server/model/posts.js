const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title : {
        type : String,
        required: true
    },
    description : {
        type: String,
        required: true
    }
})

const Postdb = mongoose.model('posts', schema);

module.exports = Postdb;