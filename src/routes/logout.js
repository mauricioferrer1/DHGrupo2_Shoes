const express = require('express');
const router = express.Router();
const controller = require ('../controllers/usersController');
const autenticationMiddleware = require('../../middlewares/autenticationMiddleware')

/* get logout page. */

router.get ('/',autenticationMiddleware,controller.logOut);

module.exports = router;