const express = require('express');
const router = express.Router();
const controller = require ('../controllers/usersController');
const multer = require('multer');
const path  = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/users'));
    },
    filename: (req, file, cb) => {
        console.log(file);
        const newFilename = 'userProfile-' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }
});

const upload = multer({ storage });

/* GET register page. */
router.get('/', controller.register);

/* PUT register new user page. */
// Procesamiento del formulario de creación
router.post('/',upload.single('image'), controller.newUser);

module.exports = router;
