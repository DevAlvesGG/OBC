const { v4: uuidv4 } = require('uuid');

let post = [{
    id: uuidv4(),
    title: 'Primeiro Post',
    content: 'Conteúdo do primeiro post',
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    id: uuidv4(),
    title: 'Segundo Post',
    content: 'Conteúdo do segundo post',
    createdAt: new Date(),
    updatedAt: new Date()
}] //array de posts

// Post { id, title, content, createdAt, updatedAt}

const postModel = { //objeto com metodos

    getAllPosts() { //retorna todos os posts
        return post
    },

    getPostById(id) {
        return post.find(post => post.id === id)//retorna o post com o id igual ao id passado nos parametros
    },

    createdPost(title, content) { //cria um novo post com title e content passados nos parametros
        const post = {
            id: uuidv4(),
            title: title,
            content: content,
            createdAt: new Date(),// criado na hora atual
            updatedAt: new Date()// atualizado na hora atual
        }
        return post
    },

    savePost(posts){ //salva o post no array de posts
        post.unshift(posts)
    },

    updatePost(id,updatedPost) {
        const index = post.findIndex(post => post.id === id)

        if (index !== -1) {
            post[index] = { ...post[index], ...updatedPost, updatedAt: new Date()}
        }else {
            console.error(`Post com id ${id} não encontrado.`)
        } 
    },

    deletePost(id) {
        post = post.filter(post => post.id !== id)
    }
}

module.exports = postModel