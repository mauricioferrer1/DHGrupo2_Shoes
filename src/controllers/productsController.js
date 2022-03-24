/*const fs = require('fs');
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
  */
  let db = require ("../database/models")
  const sequelize = db.sequelize;
  const { Op } = require("sequelize");

  let productController= {
    
    search: (req, res) =>{
      db.Product.findAll({
        where:{
            name: {[Op.like] : "%" + req.body.search + "%"}
        }
      })
      .then(products => {
        if(products){
          res.render("products/products", {products:products})
        } else {
          res.render("products/products")
        }
      })
    },
  
    newProduct: (req,res) => {
      let pedirTalles = db.Size.findAll()
      let pedirColores = db.Color.findAll()
      let pedirCategory = db.Category.findAll()

      Promise.all([pedirTalles,pedirColores,pedirCategory])
        .then(function([talle,color,category]){
          res.render('products/createproduct',{talle:talle,color:color,category:category})
        })
      ;
    },

    saveNewProduct: async (req,res) =>{  
       let category=req.body.category;
       let IDcategory=[];
       let categoriesEnBaseDatos=  await db.Category.findAll()
         for (let i=0; i<categoriesEnBaseDatos.length; i++) {
           if(categoriesEnBaseDatos[i].category==category){ 
             IDcategory.push(categoriesEnBaseDatos[i].id);
           }
         }
        // let image=[];
        // let imagenes= req.files;
        // for(let i= 0; i<imagenes; i++){
        //   if(req.files[i].filename){
        //     image.push(req.files[i].filename);
        //   }
        // }
        
        // let seasonid=[];
        // let season = req.body.sale;
        // console.log(season)
        // if(season = 'on-sale'){
        //   seasonid.push(1);          
        // } else {
        //   seasonid.push(2)          
        // }

        
        let season= req.body.sale
        let sale= parseInt(season)

       let nuevoProducto= await db.Product.create({
         name:req.body.name,
         description:req.body.description,
         image:req.files[0].filename,
         image1:req.files[1].filename,
         image2:req.files[2].filename,
         image3:req.files[3].filename,
         price:req.body.precio,
         category_id:IDcategory[0],
         //season_id:seasonid[0],
         season_id:sale,
         })

       let nuevoProductoID= nuevoProducto.id;

       let tallesEnStock=req.body.size;
       let listaIDTalles=[];
       let tallesEnBaseDatos=  await db.Size.findAll() 
       for(let j=0; j<tallesEnBaseDatos.length; j++){
        //  for (let i=0; i<tallesEnStock.length; i++) {
           if(tallesEnBaseDatos[j].size==tallesEnStock){
             listaIDTalles.push(tallesEnBaseDatos[j].id);
           }
         }
      
       let coloresEnStock=req.body.color;
       let listaIDColor=[];
       let coloresEnBaseDatos=  await db.Color.findAll() 
       for(let j=0; j<coloresEnBaseDatos.length; j++){
        //  for (let i=0; i<coloresEnStock.length; i++) {
           if(coloresEnBaseDatos[j].color==coloresEnStock){
             listaIDColor.push(coloresEnBaseDatos[j].id);
           }
         }

      // for(j=0; j<listaIDTalles.length;j++){
      //   for(i=0; j<listaIDColor.length;i++){
        let nuevoProductoenStock = await db.Inventory.create({
            product_id:nuevoProductoID,
            color_id:listaIDColor[0],
            size_id:listaIDTalles[0],
            stock:req.body.stock,
          })

      res.redirect('/products'); 
    },

    listarProductos: (req,res) => {
        db.Product.findAll()
        .then(function(products){
            res.render ("products/products",{products})
        })
    },

    listarNiños: async (req,res) => {
      db.Product.findAll({
        where: {
        category_id: 1
        }
      })
      .then(productosNiños => {
        res.render ("products/niños",{products:productosNiños})
      })
    },

    listarHombres: async (req,res) => {
      db.Product.findAll({
        where: {
        category_id: 2
        }
      })
      .then(productosHombres => {
        res.render ("products/hombres",{products:productosHombres})
      })
    },

    listarMujeres: async (req,res) => {
      db.Product.findAll({
        where: {
        category_id: 3
        }
      })
      .then(productosMujeres => {
        res.render ("products/mujeres",{products:productosMujeres})
      })
    },

    detalleProducto: (req,res) => {
        let pedirProducto =  db.Product.findByPk(req.params.id,{include:[{association:"category"},{association:"colors"},{association:"sizes"}]})
        let pedirColor =  db.Color.findAll()
          Promise.all([pedirProducto,pedirColor])
          .then(function([product,color]){
              res.render("products/detail",{product:product,color:color})
          })
      },

    editProduct: (req,res) => {
      let pedirProducto = db.Product.findByPk(req.params.id,{include:[{association:"category"},{association:"colors"},{association:"sizes"}]})
      let pedirTalles = db.Size.findAll()
      let pedirColores = db.Color.findAll()
      let pedirCategory = db.Category.findAll()
      Promise.all([pedirProducto,pedirTalles,pedirColores,pedirCategory])
      .then(function([product,talle,color,category]){
        res.render('products/editproduct',{product:product,talle:talle,color:color,category:category})
      })
    },

    ProcessEditProduct:async (req,res) => {
      // let pedirProducto =  db.Product.findByPk(req.params.id)
      // let pedirColor =  db.Color.findAll()
      // let pedirCategoria =  db.Category.findAll()
      // let pedirTalle = db.Size.findAll()
      //   Promise.all([pedirProducto,pedirColor,pedirCategoria,pedirTalle])
      //   .then(function([producto,color,categoria,talle]){
      //       res.render("products/products",{producto:producto,color:color,categoria:categoria,talle:talle})
      //   })
        let category=req.body.category;
        let IDcategory=[];
        let categoriesEnBaseDatos=  await db.Category.findAll()
        for (let i=0; i<categoriesEnBaseDatos.length; i++) {
          if(categoriesEnBaseDatos[i].category==category){ 
            IDcategory.push(categoriesEnBaseDatos[i].id);
          }
        }
        
        let season= req.body.sale
        let sale= parseInt(season)

      let updateProduct = await db.Product.update({
        name: req.body.name,
        description:req.body.description,
        image:req.files[0].filename,
        image1:req.files[1].filename,
        image2:req.files[2].filename,
        image3:req.files[3].filename,
        price:req.body.precio,
        category_id:IDcategory[0],
        season_id:sale,
        },
        {
          where: {
            id: req.params.id
          }
      })

      let tallesEnStock=req.body.size;
      let listaIDTalles=[];
      let tallesEnBaseDatos=  await db.Size.findAll() 
      for(let j=0; j<tallesEnBaseDatos.length; j++){
        if(tallesEnBaseDatos[j].size==tallesEnStock){
          listaIDTalles.push(tallesEnBaseDatos[j].id);
        }
      }
        
      let coloresEnStock=req.body.color;
      let listaIDColor=[];
      let coloresEnBaseDatos=  await db.Color.findAll() 
      for(j=0; j<coloresEnBaseDatos.length; j++){
        if(coloresEnBaseDatos[j].color==coloresEnStock){
          listaIDColor.push(coloresEnBaseDatos[j].id);
        }
      }

      let updateProductoenStock = await db.Inventory.update({
        color_id:listaIDColor[0],
        size_id:listaIDTalles[0],
        stock:req.body.stock,
        },
        {
        where: {
          product_id:req.params.id,
        }
      })        

      res.redirect("/products")
    },

    cart: (req,res) => {
      res.render('products/shoppingcart');
    },

    processDeleteProduct:async (req,res) => {
      db.Product.destroy({
        where: { 
          id: req.params.id
        }
      })
      db.Inventory.destroy({
      where: { 
        product_id: req.params.id
        }
      })
      res.redirect("/products")
    }

  }
 
module.exports = productController;
