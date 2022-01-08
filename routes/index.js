var express = require('express');
//var router = express.Router();
var AsyncRouter = require("express-async-router").AsyncRouter;
var router = AsyncRouter();
var ProductController = require('../services/ProductController');
var fetch = require('node-fetch-commonjs');

/* GET home page. */
router.get('/', async function(req, res, next) {
 // var prodDb = new ProductDB();
  //Gets title from api
  //var product = await prodDb.getProductsById();
  var pc = new ProductController();
  var products = await pc.getProductsWithVat();
  var totalVat = await pc.getSumOfVat(products);
  res.render('index', {products: await products, totalVat: await totalVat});
});

module.exports = router;
