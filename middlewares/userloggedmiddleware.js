const controller = require ('../src/controllers/usersController');
 
/*function userLoggedMiddleware (req,res,next) {
    res.locals.islogged = false;

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = controller.findUsername(emailInCookie);
   
    if( userFromCookie){
        req.session.userlogged = userFromCookie;
    }

    if( req.session && req.session.userlogged){
        res.locals.islogged = true;
        res.locals.userlogged = req.session.userlogged;
    }
    
    next();
}*/


/*    const db = require('../src/database/models');
    const { Op } = require("sequelize");
    const sequelize = db.sequelize;
    
    async function userLoggedMiddleware (req,res,next) {
        res.locals.islogged = false;

        let emailInCookie = req.cookies.userEmail;
        let userFromCookie = await db.User.findOne({
            where:{
                email:{[Op.like]:emailInCookie}
            }
        })
        
        if(userFromCookie){
            req.session.userlogged = userFromCookie;
        }

        if( rreq.session.userlogged){
            res.locals.islogged = true;
            res.locals.userlogged = req.session.userlogged;
        }

        .catch(e => {
            console.log (e)
        })

        next();
        
}*/


//module.exports = userLoggedMiddleware;