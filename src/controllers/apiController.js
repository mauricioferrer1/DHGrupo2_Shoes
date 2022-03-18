let db = require ("../database/models")

//Productos
const controller = { 
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
          .then(function(product){
              return res.status(200).json({
                  data: product,
                  status:200
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
                    //url:avatar_img,

                })
            })
        
        }

}
module.exports = controller 