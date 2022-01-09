const express = require('express');
const router = express.Router();
const controller = require ('../controllers/productsController');

/* GET detail page. */

router.get('/:id', controller.detalleProducto);

module.exports = router;
