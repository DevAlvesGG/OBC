const express = require ('express');
const path = require ('node:path')


const app = express()


app.use(express.static(path.join(__dirname,'..', 'public')))

//configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

//configuração do body
app.use(express.urlencoded({ extended: true }))

const PORT = 3000;

let storageUsers = [];

//rotas
app.get('/', (req,res) => {
    res.render('cadastro')
})

app.post('/register', (req, res) => {
    const name = req.body.nome
    const email = req.body.email
    const password = req.body.senha
    const confirmPassword = req.body.confirmar

    const id = Date.now().toString()

    storageUsers.push({id, name, email, password, confirmPassword})

    res.redirect('/sucesso')
    console.log(storageUsers)
})

app.get('/sucesso', (req, res) => {
    res.render('sucesso')
})

app.get('/emails', (req,res) => {
    res.render('emailList', { users: storageUsers})
})

app.post('/delete-email/:id', (req, res) => {
    const id = req.params.id;
    storageUsers = storageUsers.filter(user => user.id !== id);

    res.redirect('/emails');
})

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`))