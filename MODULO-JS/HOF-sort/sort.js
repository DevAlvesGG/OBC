const produtos = [
    {nome: "Notebook", valorEmBRL: 3500},
    {nome: "Celular", valorEmBRL: 1600},
    {nome: "Tenis", valorEmBRL: 1000},
    {nome: "PS5", valorEmBRL: 3900},
    {nome: "Teclado", valorEmBRL: 300},
]

const produtosArrayCopia = produtos.slice().sort(function(a,b){ // podemos usar a função SLICE() para fazer uma cópia do array e não alterar o original
    return b.valorEmBRL - a.valorEmBRL  /* ordem decrescente( do maior para o menor)
                                        caso queira em ordem crescente,(menor para o maior) basta inverter a 
                                        ordem( a.valoEmBRL - b.valorEmBRL)
                                            */
})
console.log(produtos)