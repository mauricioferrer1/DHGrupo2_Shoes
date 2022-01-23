const express = require('express');
const router = express.Router();
const controller = require ('../controllers/usersController');
const autenticationMiddleware = require('../../middlewares/autenticationMiddleware');

/* GET profile page. */
router.get('/', controller.userProfile);

module.exports = router;
