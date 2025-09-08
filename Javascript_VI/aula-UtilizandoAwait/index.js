async function asyncSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('arguments must be of type number')
    }
    return a + b
}

/*async function execute() {
    asyncSum(50, 33).then((result) => {
        console.log(result)
    })
    .catch((err) => console.log(err))
}*/

async function execute() { // para tratar os erros podemos usar o try e o catch
    try {
        const result = await asyncSum(50, 33)
        console.log(result)
    }catch (err) {
        console.log(err)
    }
}

execute()