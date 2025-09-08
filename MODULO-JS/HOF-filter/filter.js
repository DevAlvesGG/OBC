const pessoas = [{nome:"Gustavo" , idade: 19, senxo: "masculino"},
    {nome:"caio" , idade: 29, senxo: "masculino"},
    {nome:"otavio" , idade: 10, senxo: "masculino"},
    {nome:"pedro" , idade: 15, senxo: "masculino"},
    {nome:"gabriel" , idade: 15, senxo: "masculino"},
    {nome:"jose" , idade: 19, senxo: "masculino"},
    {nome:"benicio" , idade: 19, senxo: "masculino"},
    {nome:"gamboa" , idade: 69, senxo: "masculino"},
    {nome:"joao" , idade: 19, senxo: "masculino"},
    {nome:"emerson" , idade: 29, senxo: "masculino"}
]
// cria a variavel,  mensiona o array.filter e passa a função como parametro 
const idade = pessoas.filter(function(pessoa){  
    return pessoa.idade < 18   //retorna a pessoa.oque quer filtrar 
})
console.log(idade)