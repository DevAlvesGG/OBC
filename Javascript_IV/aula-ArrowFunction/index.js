const soma = (a, b) => a + b;
console.log(soma(10,2));

const subtract = (a, b) => a- b ;
console.log(subtract(10,2));

const double = n => n * 2;
const number = 5;
console.log(`O dobro é : ${double(number)}`);

const nome = [ 'gustavo', 'rafael', 'gabriel', 'andre'];

const comecaComLetraG = nome.filter(nome => nome[0] === 'g');
console.log(comecaComLetraG);