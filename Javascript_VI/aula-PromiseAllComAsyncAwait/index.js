function awaitFor(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    })
}

const numbers = [1, 2, 3, 4, 5]

async function execute () {
    console.time('map')// inicia o timer 

    const squares = await Promise.all(numbers.map(async (number) => {
        await awaitFor(2)
        return number * number
    }))
    console.log(squares)

    console.timeEnd('map') // finaliza o timer da função e mostra em qnt tempo foi executada
}

execute()