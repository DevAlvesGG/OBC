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
// REDUCE

const somaIdade = pessoas.reduce(function(valorInicial,pessoa){//valorInicial é o valor que será retornado no final
    return valorInicial + pessoa.idade; //pessoa.idade é o valor que será somado com o valor inicial
},0) //aqui determinamos que 0 é o valor inicial que será somado com o valor de pessoa.idade
console.log(somaIdade)