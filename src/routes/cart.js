const express = require('express');
const router = express.Router();
const controller = require ('../controllers/mainController');

/* GET cart page. */

router.get('/',controller.cart);


module.exports = router;