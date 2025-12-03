let post = [{
    id: '1',
    title: 'Primeiro Post',
    content: 'Conteúdo do primeiro post',
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    id: '2',
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
            id: Date.now().toString(),
            title: title,
            content: content,
            createdAt: new Date(),// criado na hora atual
            updatedAt: new Date()// atualizado na hora atual
        }
    },

    savePost(post){ //salva o post no array de posts
        post.unshift(post)
    },

    updatePost(id,updatedPost) {
        const index = post.filter(post => post.id === id)
        post[index] = { ...post[index], ...updatedPost, updatedAt: new Date()}
    },

    deletePost(id) {
        post = post.filter(post => post.id !== id)
    }
}

module.exports = postModel