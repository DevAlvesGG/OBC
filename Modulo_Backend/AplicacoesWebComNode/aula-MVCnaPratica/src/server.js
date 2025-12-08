const express = require('express')
const path = require('node:path')
const router = require('./routes')

const app = express()

//configurações de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')))

//configuração para receber dados de formulários
app.use(express.urlencoded({ extended: true }))

//configuração do EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//configuração de rotas da aplicação
app.use(router)

//configguração de porta
const PORT = process.env.PORT || 3000 //se não tiver a variável de ambiente PORT, usa a porta 3000



app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})