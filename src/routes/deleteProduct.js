const express = require('express');
const router = express.Router();
const controller = require ('../controllers/productsController');
const path = require ('path');
//const adminMiddleware = require ('../../middlewares/adminMiddleware');

/* DELETE product */
router.delete('/:id/process',
//adminMiddleware,
 controller.processDeleteProduct);

module.exports = router;