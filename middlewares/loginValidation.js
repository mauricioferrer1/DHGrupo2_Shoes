const {body} = require('express-validator');

const validations = [
    body('email')
        .notEmpty().withMessage('El campo no puede quedar vacio').bail(),
    body('password')
    .notEmpty().withMessage('El campo no puede quedar vacio').bail(),
    
];

module.exports = validations;