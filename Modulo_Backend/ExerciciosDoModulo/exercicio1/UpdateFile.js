import fs from 'fs'

const nameFile = "meuarquivo.txt"

// função que atualiza o conteudo do arquivo
export function updateFile(argument) {

    try {
        fs.writeFileSync(nameFile, argument)
        console.log("Conteudo do arquivo atualizado como sucesso")
    } catch (err) {
        console.log("Erro ao atualizar o arquivo", err.message)
    }
}