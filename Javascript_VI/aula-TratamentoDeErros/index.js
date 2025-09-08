function sum(a, b) {
    const firstNumber = Number(a)
    const secondNumber = Number(b)

    if(isNaN(firstNumber) || isNaN(secondNumber)) {
        throw new Error('arguments must be two numbers') 
    }
    return firstNumber + secondNumber
}

try { //tentar executar
    console.log(sum(1,2))
    console.log(sum(true, 14))
    console.log(sum(undefined, 22))
    console.log(sum(18, "0"))
    console.log(sum(39, null))
    console.log(sum(13, "zero"))
} catch(error) { //se acontecer algum erro, ele mostra o bloco que está dentro do catch, sem encerrar a aplicação
    console.log('An error ocurred!')
    console.log(error.message)
} finally {
    console.log('Calculation finished')
}

