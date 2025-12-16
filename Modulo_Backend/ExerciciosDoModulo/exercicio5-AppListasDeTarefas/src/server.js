const express = require('express');
const app = express();
const path = require('node:path');
const router = require('./routes');

const PORT = process.env.PORT || 3000; // Define a porta padrão ou use a variável de ambiente

//configuração para receber dados de formulários
app.use(express.urlencoded({ extended: true }))

app.use(express.json());

//configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//configurações de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//uso das rotas
app.use(router);

//iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
