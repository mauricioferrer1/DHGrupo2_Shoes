const express = require('express');
const router = express.Router();
const controller = require ('../controllers/usersController');


//Uso de multer
const multer = require('multer');

//Uso de espacio para guardar multer

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

/* GET edit user*/
router.get('/profile/', controller.editUser);

/* PUT edit user */
router.put('/saveuser',upload.any('img'), controller.updateUser);

module.exports = router;