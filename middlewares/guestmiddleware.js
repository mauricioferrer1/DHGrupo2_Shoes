function guestMiddleware (req,res,next){
    if(req.session.userlogged){
        return res.redirect('/users/profile')
    }
    next();
}

module.exports = guestMiddleware;