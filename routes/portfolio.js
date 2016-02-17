'use strict';

const express = require('express');
const router = express.Router();

const portfolio = require('../controllers/portfolio');

router.get('/', portfolio.index);
router.post('/', portfolio.new);

module.exports = router;