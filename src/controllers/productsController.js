const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {

    listarProductos: (req,res) => {
      
         res.render('products/products', {products})
      },

    detalleProducto: (req,res) => {
        let id = req.params.id
		    let product = products.find (product => product.id == id)
		    res.render('products/detail', {product})
      }

      
  
  };
  
  module.exports = controller;