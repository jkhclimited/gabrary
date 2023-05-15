const Card = require('../../models/card');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    getOne,
}

async function getOne(req, res) {
    try {
        let card = await Card.find(req.params.name);
        console.log(card);
    }
}