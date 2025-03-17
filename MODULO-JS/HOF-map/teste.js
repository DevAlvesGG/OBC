const pessoas = [{nome:"Gustavo" , idade: 19, senxo: "masculino"},
                {nome:"caio" , idade: 19, senxo: "masculino"},
                {nome:"otavio" , idade: 19, senxo: "masculino"},
                {nome:"pedro" , idade: 19, senxo: "masculino"},
                {nome:"gabriel" , idade: 19, senxo: "masculino"},
                {nome:"jose" , idade: 19, senxo: "masculino"},
                {nome:"benicio" , idade: 19, senxo: "masculino"},
                {nome:"gamboa" , idade: 19, senxo: "masculino"},
                {nome:"joao" , idade: 19, senxo: "masculino"},
                {nome:"emerson" , idade: 19, senxo: "masculino"}
]

const nomes = pessoas.map(function(pessoa){// map é uma função que percorre o array e retorna um novo array com os valores que você deseja
    return pessoa.nome;
})
//console.log(nomes);

const idades = pessoas.map(function(pessoa){ // com o map transformamos o elemento de um objeto em um array
    return pessoa.idade;
})
console.log(idades);