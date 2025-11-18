const express = require('express');

const app = express()

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html');   
})

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

