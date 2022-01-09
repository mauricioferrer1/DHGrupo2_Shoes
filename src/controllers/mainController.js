const controller = {

    index: (req,res) => {
        res.render('index');
      },

    

      
    cart: (req,res) => {
        res.render('shoppingcart');
      },
      
    login: (req,res) => {
        res.render('login');
      },  

    register: (req,res) => {
        res.render('register');
      },

    newProduct: (req,res) => {
        res.render('createProduct');
      },

    saveNewProduct: (req,res) => {
      // let json = lectura json.lenght
      // let id = json.lenght + 1 
      let name = req.body.name;
      let description = req.body.description;
      let image = req.body.img;
      let size =  req.body.size;// como anotar size
      let precio = req.body.precio;
      let category = req.body.category;

      res.send(name + " " + description + " " + size + " " + precio + " " + category + " " + image)
      
      
      //res.redirect('/products');
    }

}

module.exports = controller;