const express = require('express');
const router = express.Router();
const controller = require ('../controllers/productsController');
const path = require ('path');
const autentication = require ('../../middlewares/autenticationMiddleware');

/* DELETE product */
router.delete('/:id/process',autentication, controller.processDeleteProduct);

module.exports = router;