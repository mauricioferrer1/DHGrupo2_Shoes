const express = require('express');
const router = express.Router();
const controller = require ('../controllers/productsController');
const path = require ('path');
const adminMiddleware = require ('../../middlewares/adminMiddleware');

//Uso de multer
const multer = require('multer');

//Uso de espacio para guardar multer

const storage = multer.diskStorage( {
    destination: (req,file,cb) => {
        cb(null,path.join(__dirname,'/../../public/images/products'));
    },

    filename: (req,file,cb) =>{
        const newFileName = 'product-'+Date.now()+path.extname(file.originalname);
        cb(null,newFileName);
    }
});

const upload = multer({ storage });

/* GET create product page. */
//router.get('/', autentication,controller.newProduct);LO COMENTE PARA QUE NO ENVIE AL LOGIN EL MIDDLEWARE
router.get('/',adminMiddleware,controller.newProduct);

/* POST create product page. */
router.post('/', upload.any('img'), controller.saveNewProduct);


module.exports = router;