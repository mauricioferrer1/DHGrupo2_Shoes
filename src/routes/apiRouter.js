const express = require("express")
const router = express.Router()
const productController = require ("../controllers/api/apiProductsController")
const userController = require ("../controllers/api/apiUsersController")


//product
router.get("/products/:id", productController.detail)
router.get("/lastproduct", productController.lastProduct)
router.get("/products", productController.list)

// user
router.get("/users/:id", userController.detail);
router.get("/users", userController.list)

module.exports = router;