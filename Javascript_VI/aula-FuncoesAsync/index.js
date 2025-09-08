/* async function asyncSum(a, b) { // como é uma função async, ela já retorna uma promise
                                // o return é como se fosse o 'resolve' de uma promise
    return a + b                            
}
    


async function asyncSubtract(a, b) {
    return a - b
}
 
const resultAstnc = asyncSum(50, null)
const resultAsync = asyncSubtract(50, 83)

Promise.all([resultAstnc, resultAsync]).then(result => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})*/

const numbers = [1, 2, 3, 4, 5]

async function asyncSquare(x) {
    return x * x 
}

Promise.all(numbers.map(number => asyncSquare(number))).then(results => {
    console.log(results)
}).catch((err) => console.log(err))