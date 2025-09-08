//Parametros Rest faz com que a função receba um número indefinido de parâmetros
// Rest é o operador que transforma os parâmetros em um array   
// Spread é o operador que transforma um array em parâmetros

function sum (...numbers) {
  return numbers.reduce((acc, number) => acc + number, 0);
}
console.log(sum(2,2,2,2,2,2,2,2,2,2)); 