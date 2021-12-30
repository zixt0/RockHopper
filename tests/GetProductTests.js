var assert = require('assert');
var ProductDB = require('../data_access/ProductDB');

describe('Product tests', function () {
  prodDb = new ProductDB();
  describe('GetProduct', function () {
    it('Should get name of product and equal Mens Casual Premium Slim Fit T-Shirts',
      async function () {
        var product = await prodDb.getProductsById();
        assert.equal(await product.title, 'Mens Casual Premium Slim Fit T-Shirts ');
        })
    })
})