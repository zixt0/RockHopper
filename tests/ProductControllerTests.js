var assert = require('assert');
var expect = require('expect.js')
var ProductController = require('../services/ProductController');
var ProductDB = require('../data_access/ProductDB');
const { AssertionError } = require('assert/strict');

describe('Product Controller Tests', function () {
  var pc = new ProductController();
  describe('Get All Products With Vat', function () {
    it('Should get all products with VAT calculated', async function () {
      var products = await pc.getProductsWithVat();
      await products.forEach(product => {
        console.log(product.vat);
        expect(product.vat >= 0).to.be.ok();

      })
    })
  })

  describe('Get VAT from product', function () {
    it('VAT should equal 25% of 80% of the profit', async function () {
      var prodDb = new ProductDB();
      var products = await pc.calculateVatForProducts(await prodDb.getProductsById(1));
      console.log(await products);
      products.forEach(product => {
        assert.equal(product.vat, 50.05);
      })

    })
  })

  describe('Calculate total VAT from with list of products', function () {
    it('Should return sum of provided VAT amounts', async function () {
      var products = await pc.getProductsWithVat();
      var totalVat = await pc.getSumOfVat(products);
      assert.equal(await totalVat, 425.73);
    })
  })

  describe('Export products to .xlsx file', function () {
    it('Should create an .xlsx file with the product data', async function () {
      var products = await pc.getProductsWithVat();
      var excelSheet = await pc.exportProductsToExcel(products);
      
      assert.equal(excelSheet, 1);
      
    })
  })
})