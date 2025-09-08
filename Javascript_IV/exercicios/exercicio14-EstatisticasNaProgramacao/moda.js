const mode = (...numbers) =>{
    const quantities = numbers.map(num => [
        num,
        numbers.filter(n => n ===num).length
    ])
    quantities.sort((a,b) => b[1] - a[1])
    return quantities[0][0]
}

console.log(mode(2,2,2,2,2,2,4,4,4,))