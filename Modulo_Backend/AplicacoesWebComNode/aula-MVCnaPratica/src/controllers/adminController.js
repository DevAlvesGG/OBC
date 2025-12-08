const postModel = require('../models/postModel');

const adminController = {
// GET /admin
    index: (req, res) => {
        const post = postModel.getAllPosts();
        res.render('admin', { post })
    },
// GET /admin/create

    create: (req,res) => {
        res.render('newPostForm')
    },
// POST /admin/create
    save: (req,res) => {
        const { title, content } = req.body;
        const newPost = postModel.createdPost(title,content);
        postModel.savePost(newPost);
        res.redirect('/admin')
},
// GET /admin/edit/:id
    edit: (req, res) => {
        const id = req.params.id;
        const post = postModel.getPostById(id);
        res.render('editPostForm', { post })
    },

// POST /admin/update/:id
    update: (req, res) => {
        const id = req.params.id
        const { title, content } = req.body
        postModel.updatePost(id, { title, content })
        res.redirect('/admin')
    },

// POST /admin/delete/:id
    delete: (req, res) => {
        const id = req.params.id; //id do post a ser deletado
        postModel.deletePost(id) //chama a função deletaPost do postModel e passa o id
        res.redirect('/admin') //redireciona para a página de admin após deletar o post
    }

}

module.exports = adminController;