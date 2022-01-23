const controller = require ('../src/controllers/usersController');
 
function userLoggedMiddleware (req,res,next) {
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
}

module.exports = userLoggedMiddleware;