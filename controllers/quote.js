'use strict';

const request = require('request');

module.exports.index = (req, res) => {
  //returns the rendered HTML of quote.jade view
  res.render('quote');
};

module.exports.stock = (req, res) => {
  const symbol = req.body.sym;
  //Stock Quote API
  const API_URL = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=${symbol}';

  request.get(API_URL, (err, response, body) => {
    if (err) throw err;

    const obj = JSON.parse(body);

    //returns the rendered HTML of details.jade view
    res.render('details', {
      name: obj.Name,
      symbol: obj.Symbol,
      price: obj.LastPrice
    });
  })
};