let db = require ("../database/models")
const controller = require("./usersController")

//Productos
const ApiController = { 
    listarProductos: (req,res) => {
    db.Product.findAll()
        .then(products => {
       return res.status(200).json({
            count: products.length,
            //countByCategory: ....,
            data: products,
            status: 200

       })
    })
    },

    detalleProducto: (req,res) => {
        db.Product.findByPk(req.params.id,{include:[{association:"category"},{association:"colors"},{association:"sizes"}]})
        db.Color.findAll()
        //color?
          Promise.all()
          .then(function(product,color){
              //color
              return res.status(200).json({
                  
                  
              })
          })
    },

    //Usuarios

    listarUser: (req,res) => {
        db.User.findAll()
            .then(function(users){
            return res.status(200).json({
                count: users.length,
                data: users,
                status: 200
    
           })
        })
        },

        detalleUser: (req,res) => {
            db.User.findByPk(req.params.id)
            .then(user => {
                return res.status (200).json({
                    data:user,
                    url:imagen,

                })
            })
        
        }

}


module.exports = controller