const express = require('express');
const router = express.Router();
const controller = require ('../controllers/usersController');
const autenticationMiddleware = require('../../middlewares/autenticationMiddleware')


/* DELETE user */
router.delete('/', autenticationMiddleware, controller.deleteUser);

module.exports = router;