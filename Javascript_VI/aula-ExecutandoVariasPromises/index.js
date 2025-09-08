function asyncSum(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be of type number')
        } else {
            resolve(a + b)
        }
    })
}

function asyncSubtract(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be of type number')
        } else {
            resolve(a - b)
        }
    })
}
 
const resultAstnc = asyncSum(50, null)
const resultAsync = asyncSubtract(50, 83)

Promise.all([resultAstnc, resultAsync]).then(result => {
console.log(result)
}).catch((err) => {
    console.log(err)
}
)