const express = require('express');
const router = express.Router();
const controller = require ('../controllers/productsController');

/* GET products page. */

router.get('/', controller.listarProductos);
router.post('/search', controller.search);
router.get('/kids', controller.listarNiños);
router.get('/hombres', controller.listarHombres);
router.get('/mujeres', controller.listarMujeres);

module.exports = router;
