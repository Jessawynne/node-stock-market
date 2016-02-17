'use strict';

const myPortfolio = require('../models/portfolio');

module.exports.index = (req, res) => {
  myPortfolio.find().sort('-sym').exec((err, doc) => {
    if (err) throw err;

    if (doc) {
      res.send(doc);
      return;
    } else {
      //returns rendered HTML of index.jade view
      res.render('index', {
        sym: 'GE',
        company: 'General Electric Co',
        price: '29.50',
        qty: '3'
      })
    }
  });
};

module.exports.new = (req, res) => {
  
};