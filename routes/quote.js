'use strict';

const express = require('express');
const router = express.Router();

const quote = require('../controllers/quote');

router.get('/quote', quote.index);

router.post('/quote', quote.stock);

module.exports = router;