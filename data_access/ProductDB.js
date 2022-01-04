var fetch = require('node-fetch-commonjs');

class ProductDB {

  //Get single product by id
  async getProductsById(id) {
    //Fetch from fakestore API, convert to json and return the data
    var response = await fetch(`https://61d217e8da87830017e5940a.mockapi.io/api/rv/products/${id}`);
    var data = await response.json();
    return await data;
  }

  async getAllProducts() {
    var response = await fetch(`https://61d217e8da87830017e5940a.mockapi.io/api/rv/products/`);
    var data = await response.json();
    return await data;
  }
}
module.exports = ProductDB;