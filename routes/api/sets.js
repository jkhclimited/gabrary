const express = require('express');
const router = express.Router();
const setsCtrl = require('../../controllers/api/sets');

router.get('/', setsCtrl.index);
router.get('/:id', setsCtrl.setlist);

module.exports = router;