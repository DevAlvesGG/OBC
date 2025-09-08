//Criando uma Função Anonima 
function soma (a,b){ // Criei uma Função chamada SOMA
    return a+b;
}
const operacao = soma // Criei uma constante chamada OPERACAO e atribui a ela a FUNAÇÂO SOMA 

console.log(operacao(30,5)) // Chamei a constante OPERACAO e passei dois valores para a função SOMA

// Podemos criar uma variavel para receber uma função anonima, permitindo a função ser chamada sem nome

const subtracao = function (a,b){ // Criei uma variavel chamada SUBTRACAO e atribui a ela uma função anonima
    return a - b;
}
console.log(subtracao(30,5)) // Chamei a variavel SUBTRACAO e passei dois valores para a função anonima