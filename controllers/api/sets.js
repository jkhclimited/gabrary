const Set = require('../../models/set');
const Card = require('../../models/Card');

module.exports = {
    index,
    setlist,
}

async function index(req, res) {
    try {
        let sets = await Set.populate({options: {sort: {name: 1}}}).exec();
        res.status(200).json(sets.sets);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}

async function setlist(req, res) {
    try {
        let set = await Set.findById(req.params.id).populate({path: 'cards', options: {sort: {collector_number: 1}}}).exec();
        res.status(200).json(set);
    } catch (err) {
        res.sendStatus(400);
    }
}