const express = require('express');
const router = express.Router();
const controller = require ('../controllers/productsController');

/* GET cart page. */

router.get('/',controller.cart);


module.exports = router;