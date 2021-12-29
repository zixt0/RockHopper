var express = require('express');
var router = express.Router();
var ProductDB = require('../data_access/ProductDB');
var fetch = require('node-fetch-commonjs');

/* GET home page. */
router.get('/', function(req, res, next) {
  prodDb = new ProductDB();
  var product;
  prodDb.getProductsById(2)
    .then((response) => res.render('index', { title: response.title}))
    .catch(err => console.log(err));
  
});

module.exports = router;
