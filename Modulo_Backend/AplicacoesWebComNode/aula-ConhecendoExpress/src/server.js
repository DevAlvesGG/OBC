const express = require('express');

const server = express(); 

server.get('/', (request, response) => {
    response.send('Servidor Express funcionando! Você está na rota raiz.');

})

server.get('/artigos', (req,res) => {
    res.send('Você está na rota de artigos.');
})

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Servidor Express iniciado em http://localhost:${PORT}/`);
})