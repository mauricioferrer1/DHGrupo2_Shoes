const express = require('express');
const router = express.Router();
const controller = require ('../controllers/usersController');


/* DELETE user */
router.delete('/', controller.deleteUser);

module.exports = router;