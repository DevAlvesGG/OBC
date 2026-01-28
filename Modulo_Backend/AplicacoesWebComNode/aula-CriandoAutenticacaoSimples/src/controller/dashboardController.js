module.exports = {
    index: (req, res) => {
        const { user } = req.session;
        res.render('dashboard', { user: user });
    }
}