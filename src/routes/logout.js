const express = require('express');
const router = express.Router();
const controller = require ('../controllers/usersController');

/* get logout page. */

router.get ('/',controller.logOut);

module.exports = router;