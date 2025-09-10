const fs = require('fs');

// Assincrono
const content = "Conteudo do novo arquivo assincronos"
fs.writeFile("./arquivo.txt", content , "utf-8" , (error) => {
    if(error) {
        console.log("Erro ao criar o arquivo" , error.message)
        return
    }
    console.log("Arquivo criado com sucesso de forma assincrona!")
})

// sincrono
/*try {
    fs.writeFileSync('arquivo.txt', 'Hello World!', 'utf-8') 
    console.log("Arquivo criado com sucesso!")
} catch (error) {
    console.log("Erro ao escrever o arquivo", error.message)
}*/