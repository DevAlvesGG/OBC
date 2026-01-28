const express = require('express');
const authController = require('./controller/authController');
const dashboardController = require('./controller/dashboardController');
const { middlewareAuth, middlewareRole } = require('./middleware/middlewareAuth');
const router = express.Router();

router.get('/', authController.index);
router.post('/auth/login', authController.login);
router.post('/auth/register', authController.register);
router.get('/dashboard', middlewareAuth, dashboardController.index);
router.get('/auth/logout', authController.logout);
router.get('/dashboard/usuarios', middlewareAuth, middlewareRole, dashboardController.user)


module.exports = router;