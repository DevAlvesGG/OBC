
import { mediaAritimetica } from "./mediaAritimeticaSimples.js"

const median = (...numbers)=> {
    const orderedNumbers = numbers.sort((a,b) => a - b); 
    const middle = Math.floor( orderedNumbers.length / 2)
    if (orderedNumbers.length % 2 !== 0){
        return orderedNumbers[middle]
    }
    const firstmedian = orderedNumbers[middle - 1]
    const secondmedian = orderedNumbers[middle]

    return mediaAritimetica(firstmedian, secondmedian)
}

console.log(median(3,3,3,3,3,4))