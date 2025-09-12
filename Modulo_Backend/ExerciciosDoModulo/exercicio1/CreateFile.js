import fs from "fs"

const nameFile = "meuarquivo.txt"

export function createFile(argument) {

    try {
        fs.writeFileSync(nameFile, argument)
        console.log("Arquivo criado com sucesso")
    } catch (err) {
        console.log('Erro ao criar o arquivo',err.message)
    }
}


