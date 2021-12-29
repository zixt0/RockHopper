var assert = require('assert');
var ProductDB = require('../data_access/ProductDB');

describe('Product tests', function () {
  prodDb = new ProductDB();
  describe('GetProduct', function () {
    it('Should get name of product and equal Mens Casual Premium Slim Fit T-Shirts',
      function () {
        prodDb.getProductsById(2)
          .then((response) => (assert.equal(response.title, 'Mens Casual Premium Slim Fit T-Shirts')));
        })
    })
})