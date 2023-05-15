var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new mongoose.Schema({
    name: String,                   
    collector_number: Number,     
    types: String,                  
    classes: String,                
    element: String,
    effect: String,
    flavor_text: String,
    cost_memory: Number,
    cost_reserve: Number,
    level: Number,
    power: Number,
    life: Number,
    speed: String,
    legality: String,
    editions: Array,    //Contains the rarity integer as well
}, {
    timestamps: false
});

module.exports = mongoose.model('Card', cardSchema);