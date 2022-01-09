const express = require('express');
const router = express.Router();
const controller = require ('../controllers/mainController');

/* GET create product page. */
router.get('/', controller.newProduct);

/* POST create product page. */
router.post('/', controller.saveNewProduct);


module.exports = router;