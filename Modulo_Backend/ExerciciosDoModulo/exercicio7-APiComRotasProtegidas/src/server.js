const express = require('express');
const path = require('node:path');
const router = require('./routes');
const app = express();

//configuração para ler JSON
app.use(express.json());

//configuração para receber dados de formulários
app.use(express.urlencoded({ extended: true })); 

// configuração de arquivos estaticos
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//configuração das rotas
app.use(router);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));