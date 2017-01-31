'use strict';

var fs = require('fs'),
    express = require('express'),
    products = require('./products.json');

const PORT = 8080;
const app = express();

var usage = `
    URI           HTTP Method   POST body     Result
  1 listProducts  GET           empty         Show list of all the products.
  2 show/:id      GET           empty         Show details of a product.
  3 /             GET                         service available
`;

// Define routing, core of Web API
/*

    URI           HTTP Method   POST body     Result
  1 listProducts  GET           empty         Show list of all the products.
  2 show/:id      GET           empty         Show details of a product.
  3 /             GET                         service available

*/

app.get('/', function (req, res) {
  res.send(usage);
});

app.get('/listProducts', function (req, res) {
  res.json(products);
});

app.get('/show/:id', function (req, res) {
  var prodFound = products.filter(function(product) {
    return product.id == req.params.id;
  });
  res.json(prodFound);
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
