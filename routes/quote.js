'use strict';

const express = require('express');
const router = express.Router();

const Quote = require('../models/quote');
const quote = require('../controllers/quote');

router.get('/quote', quote.index);
router.post('/quote', quote.buy);
router.post('/quote', quote.sell);

module.exports = router;