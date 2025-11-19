const express = require('express');
const path = require('node:path');

const app = express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

const PORT = 3000;

app.get('/', (req,resp) => {
    const title = "Título dinâmico passado pelo servidor"
    const text = "Esse é um texto dinâmico passado pelo servidor para a página HTML"

    resp.render('index', { title, text })
})

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`))