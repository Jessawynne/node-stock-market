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
        //example stock added to portfolio
        sym: 'GE',
        company: 'General Electric Co',
        price: '29.50',
        qty: '3'
      })
    }
  });
};

module.exports.new = (req, res) => {
  const price = req.body.price
  const stockAction = req.body.action;
  let numberOfStocks;

  if (stockAction === 'buy') {
    numberOfStocks = req.body.qty;
  } else if (stockAction === 'sell') {
    numberOfStocks = req.body.qty * -1; 
  }

  const myQuote = new Stock({
    name: req.body.name,
    symbol: req.body.sym,
    qty: numberOfStocks
  });

  myQuote.save( (err, result) => {
    if (err) throw err;

    //returns rendered HTML of index.jade view
    res.render('index', {
      sym: myQuote.symbol,
      comp: myQuote.name,
      price: price,
      qty: myQuote.qty
    });
  });
};