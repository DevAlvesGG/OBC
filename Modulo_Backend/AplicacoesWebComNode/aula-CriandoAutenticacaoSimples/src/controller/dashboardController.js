const  users = require('../model/users');

module.exports = {
    index: (req, res) => {
        const { user } = req.session;
        res.render('dashboard', { user: user });
    },

    user: (req, res) => {
        res.render('users', { users });
    }
}