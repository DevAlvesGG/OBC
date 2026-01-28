const middlewareAuth = (req, res, next) => {
    if (req.session.authenticated) {
        next();
    } else {
        res.redirect('/');
    }
}

const middlewareRole = (req, res, next) => {
    const { user } = req.session;
    if(user.role === 'admin') {
        next();
    } else {
        res.redirect('/dashboard');
    }
}

module.exports = { middlewareAuth, middlewareRole };