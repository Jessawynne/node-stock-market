'use strict';

const mongoose = require('mongoose');

module.exports = mongoose.model('quote',
  mongoose.Schema({
    name: String,
    symbol: String,
    price: Number
  })
);