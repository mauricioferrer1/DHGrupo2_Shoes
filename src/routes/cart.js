const express = require('express');
const router = express.Router();
const controller = require ('../controllers/productsController');
const autentication = require ('../../middlewares/autenticationMiddleware');

/* GET cart page. */

router.get('/',autentication,controller.cart);


module.exports = router;