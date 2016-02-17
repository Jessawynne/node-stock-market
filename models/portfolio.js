'use strict';

const mongoose = require('mongoose');

module.exports = mongoose.model('portfolio',
  mongoose.Schema({
    name: String,
    symbol: String,
    qty: Number
  })
);