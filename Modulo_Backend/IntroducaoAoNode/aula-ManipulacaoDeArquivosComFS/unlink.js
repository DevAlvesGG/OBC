const fs = require('node:fs');

fs.unlink("arquivo-novo.txt", (error) => {
    if(error) {
        console.log("Erro ao deletar o arquivo", error.message)
    }
    console.log("Arquivo excluido com sucesso")
})