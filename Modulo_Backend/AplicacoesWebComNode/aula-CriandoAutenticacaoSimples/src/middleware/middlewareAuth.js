const middlewareAuth = (req, res, next) => {
    if (req.session.authenticated) {
        next();
    } else {
        res.redirect('/');
    }
}

module.exports = middlewareAuth;