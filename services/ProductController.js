var ProductDB = require('../data_access/ProductDB');
const XLSX = require('xlsx');


class ProductController {
  constructor() {
    this.prodDb = new ProductDB();
  }
  async getProductsWithVat() {
    var products = await this.prodDb.getAllProducts();
    return await this.calculateVatForProducts(products);
  }

  //Set vat for list of products
  async calculateVatForProducts(products) {
    //Convert products to array if not already an array
    if(!Array.isArray(products)){
      products = [products];
    }
    products.forEach(product => {
      //80% of the profit of any sale is taxable
      //VAT is 25% of the taxable profit
      var profit = product.salesPrice - product.buyPrice;
      var taxableProfit = profit * 0.8;
      var vat = taxableProfit * 0.25;
      //Reduce to 2 decimals
      product.vat = Number(vat.toFixed(2));
      //If VAT is negative, set to 0. Can't pay VAT on sale with no profit
      if (product.vat < 0) {
        product.vat = 0;
      }


    })
    return products;
  }

  async getSumOfVat(products){
    //If single product is provided outside of an array, return vat for that product
    if(!Array.isArray(products)){
      return products.vat;
    } else {
      var totalVat = 0;
      products.forEach(product => {
        totalVat += product.vat;
      })
      return totalVat;
    }
  }

  //Create .xlsx file with product info, VAT
  //Must also show how VAT was calculated
  async exportProductsToExcel(products) {
      try {
        
      
      const worksheet = XLSX.utils.json_to_sheet(products);
      const workbook = XLSX.utils.book_new();

      XLSX.utils.book_append_sheet(workbook, worksheet, "products");

      //Generate buffer
      XLSX.write(workbook, {bookType:'xlsx', type: 'buffer'});

      //Binary string
      XLSX.write(workbook, {bookType: 'xlsx', type: 'binary'});

      XLSX.writeFile(workbook, "ProductData.xlsx");

      return 1;

    } catch (error) {
        
    }
    
  }
}
module.exports = ProductController;