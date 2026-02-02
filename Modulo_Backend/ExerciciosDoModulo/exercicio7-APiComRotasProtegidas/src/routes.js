const { optionalAuth, ensureAuth, ensureAdmin  }  = require('./middleware/verifyAuth');
const express = require('express');
const authController = require('./controller/authController');
const welcomeController = require('./controller/welcomeController');
const userController = require('./controller/userController');

const routes = express.Router();

routes.get('/', authController.auth);
routes.post('/register', authController.register);
routes.post('/login', authController.login);
routes.get('/dashboard', authController.dashboard);
routes.get('/welcome', optionalAuth, welcomeController.welcome);
routes.get('/users',ensureAuth, ensureAdmin, userController.index);
routes.get('/users/:id', userController.showUser);
routes.post('/users', ensureAuth, ensureAdmin, userController.save); 
routes.delete('/users/:id', ensureAuth, ensureAdmin, userController.delete)

module.exports = routes;