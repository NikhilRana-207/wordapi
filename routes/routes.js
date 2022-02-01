const express = require('express');
const router = express.Router();
const { getWord, checkWord } = require('../controllers/words');

router.route('/:serial').get(getWord);
router.route('/check/:word').get(checkWord);

module.exports = router;