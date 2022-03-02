const {check} = require ("express-validator")
const validaciones = [
    check("name")
    .notEmpy()
    .isLength({min:5}).withMessage("debe tener al menos 5 caracteres"),
    
    
    check("description")
    .notEmpy()
    .isLength({min:20}).withMessage("debe tener al menos 20 caracteres"),


    check("img")
    .notEmpy(),

    
    /*check("precio?")
    check("category?")*/
    
]

module.exports = validaciones