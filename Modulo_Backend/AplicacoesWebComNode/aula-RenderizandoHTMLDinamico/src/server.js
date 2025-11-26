const express = require('express');
const path = require('node:path');

const app = express()

//configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

//configuração do body
app.use(express.urlencoded({ extended: true }))

const PORT = 3000;

const storedUsers = [];

app.get('/', (req,res) => {
    const title = "Título dinâmico passado pelo servidor"
    const text = "Esse é um texto dinâmico passado pelo servidor para a página HTML"

    res.render('index', { title, text })
})

app.get('/formulario', (req, resp) => {
    resp.render('form')
})

app.get('/usuarios', (req,res) => {
    res.render('users', { users: storedUsers})
})

app.post('/register', (req,res) => {
    const username = req.body.username
    const password = req.body.password

    storedUsers.push({ username, password })

    res.redirect('/usuarios') 
})


app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`))