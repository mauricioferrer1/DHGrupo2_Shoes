const express = require('express');
const router = express.Router();
const controller = require ('../controllers/usersController');
const guestMiddleware = require ('../../middlewares/guestmiddleware');
const validations = require('../../middlewares/loginValidation');

/* GET login page. */

router.get('/',controller.login);

/* POST Login Form */

router.post('/',validations, controller.loginProcess);

module.exports = router;
