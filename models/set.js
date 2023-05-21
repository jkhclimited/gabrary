var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setSchema = new mongoose.Schema({
    name: String,
}, { 
    timestamps: false
})

module.exports = mongoose.model('Set', setSchema);