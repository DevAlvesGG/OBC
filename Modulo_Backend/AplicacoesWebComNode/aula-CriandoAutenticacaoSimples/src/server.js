const express = require('express')
const path = require('node:path')
const session = require('express-session');
const router = require('./routes');
const app = express();

//configuração arquivos estáticos
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

//configuração para receber dados de formulários
app.use(express.urlencoded({ extended: true }));

//configuração do session
app.use(session({
    secret: 'mysecretkey', // Chave para assinar o cookie da sessão
    resave: false, // Não salva a sessão se não houver modificações
    saveUninitialized: true, // Não cria sessão para usuários não logados
    cookie: {
        secure: false, // Defina como true se usar HTTPS
    }

}))

//configuração de rotas da aplicação
app.use(router);



const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});