const express = require('express');
const authController = require('./controller/authController');
const dashboardController = require('./controller/dashboardController');
const middlewareAuth = require('./middleware/middlewareAuth');
const router = express.Router();

router.get('/', authController.index);
router.post('/auth/login', authController.login);
router.post('/auth/register', authController.register);
router.get('/dashboard', middlewareAuth, dashboardController.index);


module.exports = router;