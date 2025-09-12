import fs from 'fs'

const nameFile = "meuarquivo.txt"

// função que deleta o arquivo
export function deleteFile(argument) {

    try {
        fs.unlinkSync(nameFile)
        console.log("Arquivo deletado com sucesso")
    } catch (err) {
        console.log("Erro ao deletar o arquivo", err.message)
    }

}