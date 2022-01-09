const express = require('express');
const router = express.Router();
const controller = require ('../controllers/usersController');

/* GET login page. */

router.get('/',controller.login);

/* POST Login Form */

router.post('/',controller.loginProcess);

module.exports = router;
