var fetch = require('node-fetch-commonjs');

class ProductDB {

  getProductsById(id) {
    return fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => {if(response.ok){
          return response.json();
        } else {
          throw new Error('Server response was not okay');
        }
        })
  }
}

module.exports = ProductDB;
/*
prodDB = new ProductDB();
data = prodDB.getProductsById(2);
console.log(data.title);
*/