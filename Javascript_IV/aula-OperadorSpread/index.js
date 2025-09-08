let ola = `Ola Mundo!`;
console.log(...ola);

let array = [1, 2, 3, 4, 5];

//fazedo uma copia do array sem modificar o original (Utilizando o operador spread)

let cloneArray = [ ...array];
cloneArray.push(6,7,8,9,10);

console.log(cloneArray);    
console.log(array);

//Fazendo uma copia de um objeto sem modificar o original (Utilizando o operador spread)
let pessoa = {
    nome: "Lucas",
    idade: 22,
    cidade: "São Paulo"
}
let clonePessoa = {...pessoa};
clonePessoa.nome = `James`;
clonePessoa.sexo = `Masculino`;

console.log(clonePessoa);
console.log(pessoa);