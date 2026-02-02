const users = require('../model/users');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/environment');



module.exports = {
    auth: (req, res) => {
        res.render('auth');
    },

// POST /register
    register: (req, res) => {
        const { name, email, password } = req.body;
        
        if(typeof name !== 'string' || typeof password !== 'string' || typeof email !== 'string') {
            return res.status(400).json({message: 'Invalid input types'});
        }

        const newUser = users.registerUser(name, email, password)
        
        if(!newUser){
            return res.status(400).json({message: 'Email already in use'})
        }
        return res.status(200).json(newUser)
    },

// POST /login
    login: (req, res) => {
        const { email, password } = req.body;

        const user = users.getUserByEmail(email)
        
        if(typeof password !== 'string' || typeof email !== 'string') {
            return res.status(400).json({message: 'Invalid input types'});
        }

        if(!user || user.password !== password) {
            return res.status(400).json({message: 'Invalid email or password'});
        }

        const payload = {id: user.id, email: user.email};
        const token = jwt.sign(payload, JWT_SECRET, {expiresIn: '1d'});
        
        res.json(token)
    },

    dashboard: (req, res) => {
        //res.render('dashboard', { users });
        res.status(200).json(users.getAllUsers());
    }
}; 