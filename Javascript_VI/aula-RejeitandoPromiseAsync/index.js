async function asyncSum(a, b) { // como é uma função async, ela já retorna uma promise
                                // o return é como se fosse o 'resolve' de uma promise
    if(typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('arguments must be of type number')
    }
    return a + b                            
}
    
async function asyncSubtract(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('arguments must be of type number')
    }
    return a - b
}
 
const resultAstnc = asyncSum(50, 90)
const resultAsync = asyncSubtract(50, 93)

Promise.all([resultAstnc, resultAsync]).then(result => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})