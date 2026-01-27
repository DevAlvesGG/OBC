module.exports = {
    index: (req, res) => {
        res.render('dashboard', { user: {username: 'User'} });
    }
}