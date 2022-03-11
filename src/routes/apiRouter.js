const express = require("express")
const router = express.Router()
const controller = require ("../controllers/apiController")

router.get("/products/:id", controller.detalleProducto)
router.get("/products", controller.listarProductos)
router.get("/users/:id", controller.detalleUser);
router.get("/users", controller.listarUser)

module.exports = router;