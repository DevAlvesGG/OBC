let array = ["açucar", "false", "samm" , "ooooo"]
console.log(array)


//ADICIONAR ELEMENTOS EM UMA ARRAY
/*push --> (Função utilizada para
 adicionar um elemento no FINAL de uma array)*/

 let tamanho = array.push("gustavooo")
 console.log(array)
 console.log(tamanho)



 /*unshift --> (Serve para adicionar elementos no 
  COMEÇO da minha array)*/

  tamanho = array.unshift("começoo")
  console.log(array)
  console.log(tamanho)



  // Remover o ultimo elemento de uma array
/* pop  ---> (Remove o ultimo elemento de uma array) */

let ultimoElemento = array.pop()
console.log(array)
console.log(ultimoElemento)



// Remover o primeiro elemento de uma array
// shifit  ---> (Remove o primeiro elemento de uma array)


let primeiroElemento = array.shift()
console.log(array)
console.log(primeiroElemento)

ultimoElemento = array.shift()
console.log(array)
console.log(ultimoElemento)


// Pesquisar por um elemento de uma array
/*includes ---> (verifica se a array inclui aquele
                  elemento)*/
let inclui = array.includes("samm")
       console.log(inclui)


// Pesquisar por uma indice de uma array
/* indexoff ---> (Utilizada para pesquisar o indice 
                   de uma array)*/

let confirm = array.indexOf("false")
console.log(confirm)


// Cortar e Concatenar uma array
// slice ---> 

let array2 = ["um" , "dois" , "tres" ,"quatro"]
console.log(array2)
const cortar = array2.slice(-2)
console.log(cortar)


// Concatenar arrays 
// concat()
console.log("-----------------------------------")

let arrayInicio = ["um" , "dois" , "tres"]
let arrayFinal = ["quatro" , "cinco" , "seis"]

const assossiacao = arrayInicio.concat(arrayFinal)
console.log(assossiacao)


// Como iterar uma array com estrutura condicional
// Percorrendo a array

for(let indice = 0 ; indice < assossiacao.length ; indice++){
       const exibir = assossiacao [indice]
       console.log(exibir + " se encontra na posição " + indice)
}