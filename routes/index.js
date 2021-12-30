var express = require('express');
//var router = express.Router();
var AsyncRouter = require("express-async-router").AsyncRouter;
var router = AsyncRouter();
var ProductDB = require('../data_access/ProductDB');
var fetch = require('node-fetch-commonjs');

/* GET home page. */
router.get('/', async function(req, res, next) {
  var prodDb = new ProductDB();
  //Gets title from api
  var product = await prodDb.getProductsById();
  res.render('index', {title: await product.title});
});

module.exports = router;
