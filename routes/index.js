'use strict';

const express = require('express');
const router = express.Router();

const portfolio = require('./portfolio');
const quote = require('./quote');

router.use(portfolio);
router.use(quote);

module.exports = router;