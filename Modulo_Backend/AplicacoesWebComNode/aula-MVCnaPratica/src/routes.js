const express = require('express')
const postController = require('./controllers/postController')

//configuração do router
const router = express.Router()


//rota inicial
router.get('/', postController.index)
router.get('/posts/:id', postController.show)



module.exports = router