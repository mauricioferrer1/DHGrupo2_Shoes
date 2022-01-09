const express = require('express');
const router = express.Router();
const controller = require ('../controllers/productsController');
const path = require ('path');


/* DELETE product */
router.delete('/:id/product', controller.deleteProduct);

module.exports = router;