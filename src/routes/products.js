const express = require('express');
const router = express.Router();
const controller = require ('../controllers/productsController');

/* GET products page. */

router.get('/', controller.listarProductos);

module.exports = router;
