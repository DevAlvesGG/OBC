const users = [
    { username: 'admin', password: '1234' },
];

module.exports = {
// GET /
    index: (req, res) => {
        res.render('auth');
    },

// POST /auth/login
    login: (req, res) => {
        const { username, password } = req.body;
        const user = users.find(user => user.username === username && user.password === password)

        if (!user) {
           res.redirect('/')
        }else {
            req.session.authenticated = true; 
            req.session.user = user;
            req.session.save(() => {
                res.redirect('/dashboard');
            }) 
            
        }
    },

// POST /auth/register
    register: (req, res) => {  
        const { username, password } = req.body;
        const userExist = users.find(user => user.username === username && user.password === password);
        if (userExist) {
            return res.redirect('/');
        }else {
            const newUser = { username, password };
            users.push(newUser)

            req.session.authenticated = true;
            req.session.user = newUser;
            req.session.save(() => {
                return res.redirect('/dashboard');
            })
        }
        
    },

// GET /auth/logout
    logout: (req, res) => {
        req.session.destroy(() => {
            res.status(200).redirect('/');
        })
    } 
}