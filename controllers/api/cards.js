const Card = require('../../models/Card');
const Set = require('../../models/set');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    getOne,
    index,
}

async function getOne(req, res) {
    try {
        let card = await Card.find(req.params.name);
        console.log(card);
        res.status(302).json(card);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function index(req, res) {
    try {
        let cards = await Set.findById(req.set._id).populate('cards.card').exec();
        res.status(200).json(cards.cards);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}