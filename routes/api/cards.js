const express = require('express');
const router = express.Router();
const cardCtrl = require('../../controllers/api/cards');

router.get('/', cardCtrl.index);
router.get('/:id', cardCtrl.getOne);

module.exports = router;