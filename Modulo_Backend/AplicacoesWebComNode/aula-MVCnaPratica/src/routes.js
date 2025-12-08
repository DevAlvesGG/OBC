const express = require('express')
const postController = require('./controllers/postController')
const adminController = require('./controllers/adminController')

//configuração do router
const router = express.Router()


//Rotas do Blog
router.get('/', postController.index)
router.get('/posts/:id', postController.show)

//Rotas do Admin
router.get('/admin', adminController.index)
router.get('/admin/create', adminController.create)
router.post('/admin/create', adminController.save)
router.get('/admin/edit/:id', adminController.edit)
router.post('/admin/update/:id', adminController.update)
router.post('/admin/delete/:id', adminController.delete)

module.exports = router