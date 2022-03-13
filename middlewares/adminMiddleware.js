function adminMiddleware(req, res, next) {
	
	let userLogged = req.session.userLogged
	
	if (userLogged) {
		if(userLogged.user_category_id==2){
			next();
		} else {
			return res.redirect('/');
		}
	}else {
		return res.redirect('/users/login')
	}
	
}

module.exports = adminMiddleware;	