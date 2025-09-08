//Crie funções que aceitem qualquer quuantidade de parâmetros e utilizando a sintaxe de arrow funciotn 
//para calcular as seguintes operações

//Média Aritmética Simples: Pode ser calculada somando todos os valores e dividindo pelo numero de valores.
export const mediaAritimetica = (...numbers) => {
    const soma = numbers.reduce((acc, num) => acc + num, 0);
    return soma / numbers.length;
}

console.log(mediaAritimetica(6,6,6,6))