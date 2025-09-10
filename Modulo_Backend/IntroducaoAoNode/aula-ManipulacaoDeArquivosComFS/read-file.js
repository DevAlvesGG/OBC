const fs = require('node:fs');

fs.readFile("./arquivo.txt", "utf-8", (error, data) => {
    if(error) {
        console.log("Erro ao ler o arquivo", error.message)
        return
    }
    console.log(data)

})

// Sincrono
/*try {
    const data = fs.readFileSync('./arquivo.txt', 'utf-8')
    console.log(data)
} catch (error) {
    console.log("Erro ao  ler o arquivo", error.message)
}*/