const express = require('express');
const router = express.Router();
const controller = require ('../controllers/productsController');
const path = require ('path');
const autentication = require ('../../middlewares/autenticationMiddleware');

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
//router.get('/:id/editproduct/',autentication, controller.editProduct);  LO COMENTE PARA QUE NO ENVIE AL LOGIN EL MIDDLEWARE
router.get('/:id/editproduct/', controller.editProduct);

/* PUT create product page. */
router.put('/:id/saveproduct',upload.any('img'), controller.ProcessEditProduct);

module.exports = router;