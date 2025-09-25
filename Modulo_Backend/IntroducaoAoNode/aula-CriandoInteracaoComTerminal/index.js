process.stdout.write("Olá, mundo!\\n")

process.stdin.on("data", (data) => {
process.stdout.write(`Você digitou: ${data}`)

})

const readline = require("node:readline")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.on("line", (input) => {
  rl.write(`Você digitou: "${input}"`)
})

rl.question("Qual é o seu nome? ", (answer) => {
  rl.write(`Olá, ${answer}!\\n`)
})

rl.question("Qual é o seu nome? ", (answer) => {
  rl.write(`Olá, ${answer}!\\n`)
  rl.close()
})

rl.on("close", () => {
  rl.write("Saindo...")
  // repare que ao adicionar um listener para "close" precisaremos
	// encerrar o processo atual manualmente ou ele ficará "pendurado"
	process.exit(0)
})

rl.on('SIGINT', () => {
  rl.question('Deseja realmente sair? (s/n) ', (resposta) => {
    if (resposta.trim().toLowerCase() === 's') {
      rl.close()
    } else {
      rl.write("Você escolheu continuar.")
    }
  })
})