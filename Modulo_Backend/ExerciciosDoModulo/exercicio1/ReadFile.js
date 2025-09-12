import fs from 'fs'

const nameFile = "meuarquivo.txt"

// função que lê o conteudo do arquivo
export function readFile() {

    try {
        const content = fs.readFileSync(nameFile, "utf-8")
        console.log(content)
    } catch (err) {
        console.log("Erro ao ler o arquivo", err.message)
    }
}