const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {

    listarProductos: (req,res) => {
      const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
      res.render('products/products', {products})
    },

    detalleProducto: (req,res) => {
      let id = req.params.id
		  let product = products.find (product => product.id == id)
		  res.render('products/detail', {product})
    },

    generateID: function () {
        let json = products;
        let lastUser = json.pop();
        if (lastUser){
          return id= lastUser.id + 1;
        }
        return id = 1;
    },

    cart: (req,res) => {
        res.render('products/shoppingcart');
    },
  
    newProduct: (req,res) => {
        res.render('products/createproduct');
    },
  
    saveNewProduct: (req,res) => {
        let json = products;
        console.log(req.files);

        if(req.files){
        let id = controller.generateID(); 
        let name = req.body.name;
        let description = req.body.description;
        let image = req.files[0].filename;
        let image1= req.files[1].filename;
        let image2= req.files[2].filename;
        let image3= req.files[3].filename;
        let size =  req.body.size;
        let precio = req.body.precio;
        let category = req.body.category;
        let sale = req.body.sale;
  
        let newProduct = {
          "id": id,
          "name": name,
          "description": description,
          "image": image,
          "image1": image1,
          "image2": image2,
          "image3": image3,
          "size": size,
          "price": precio,
          "category": category,
          "sale": sale
        }
  
        json.push(newProduct);
  
        fs.writeFileSync(path.join(__dirname,'../../data/products.json'),JSON.stringify(json,null," "));
  
        res.redirect('/products');
        } else {
            res.send('faltan datos') // faltan validaciones
        }
    },

    editProduct: (req,res) => {
        let id = req.params.id;
        let product = products.find (product => product.id == id);
        res.render('products/editproduct',{product});
    },
  
    ProcessEditProduct:(req,res) => {
        let id = req.params.id
        let productToEdit = products.find (product => product.id == id)
        if(req.files){
          let name = req.body.name;
          let description = req.body.description;
          let image = req.files[0].filename;
          let image1= req.files[1].filename;
          let image2= req.files[2].filename;
          let image3= req.files[3].filename;
          let size =  req.body.size;
          let precio = req.body.precio;
          let category = req.body.category;
          let sale = req.body.sale;
    
          let modifiedProduct = {
            "id": productToEdit.id,
            "name": name,
            "description": description,
            "image": image,
            "image1": image1,
            "image2": image2,
            "image3": image3,
            "size": size,
            "price": precio,
            "category": category,
            "sale": sale
          }

          let json = products; 
          let newJson = json.map((item) => {
            if( item.id == id ){
              return item = modifiedProduct;
            } else {
              return item
            }
          })
          
          fs.writeFileSync(path.join(__dirname,'../../data/products.json'),JSON.stringify(newJson,null," "));
          
        res.redirect('/products')
          
        } else {
          res.send('faltan datos') // faltan validaciones
        }
      },
      
    processDeleteProduct: (req,res) => {
        let json = products;
        let productToDeleteID = req.params.id;
        let newjson = json.filter(item => item.id != productToDeleteID);
  
        fs.writeFileSync(path.join(__dirname,'../../data/products.json'),JSON.stringify(newjson,null," "));
        res.redirect('/products');
    }
      
  };
  
  module.exports = controller;