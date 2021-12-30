const { response } = require('express');
var fetch = require('node-fetch-commonjs');

class ProductDB {

  //Get single product by id
  async getProductsById(id) {
    //Fetch from fakestore API, convert to json and return the data
    var response = await fetch(`https://fakestoreapi.com/products/${id}`);
    var data = await response.json();
    return await data;
  }
}
module.exports = ProductDB;