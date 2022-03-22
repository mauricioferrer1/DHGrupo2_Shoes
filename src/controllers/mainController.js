let db = require ("../database/models")
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const controller = {

  index: async (req,res) => {
    db.Product.findAll({
    where: {
      season_id: 2
     }
   })
   .then(productos => {
    res.render ("index",{products:productos})
   })
 },

}

module.exports = controller;