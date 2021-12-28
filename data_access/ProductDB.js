var fetch = require('node-fetch-commonjs');

function getProductsById(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res=>res.json())
      .then(json=>console.log(json));
} 

console.log(getProductsById(2));