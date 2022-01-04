var assert = require('assert');
var ProductDB = require('../data_access/ProductDB');

describe('Product tests', function () {
  prodDb = new ProductDB();
  describe('GetProduct', function () {
    it('Should get name of product and equal Rustic Fresh Soap',
      async function () {
        var product = await prodDb.getProductsById(2);
        assert.equal(await product.title, 'Rustic Fresh Soap');
        })
    })
    
  describe('GetAllProducts', function() {
    it('Should get list of all products, IDs 1-10', async function() {
      var products = await prodDb.getAllProducts();
      var i = 1;
      await products.forEach(product => {
        console.log(`i = ${i}, product id = ${product.id}`);
        assert.equal(product.id, i);
        i++;
        })
    })
    })
})