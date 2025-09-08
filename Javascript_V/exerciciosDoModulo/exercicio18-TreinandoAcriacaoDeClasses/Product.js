class Product {
    constructor (name, description, price){ // Construtor da classe Product
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = 0;
    }
    // Método para adicionar quantidade ao estoque
    addToStock (quantity) {
        this.inStock += quantity;
    }

    calculateDiscount (descontoPorcentagem) { // Método para calcular desconto
        this.descontoPorcentagem = descontoPorcentagem;

        const desconto = (this.descontoPorcentagem / 100) * this.price; // Cálculo do desconto

        console.log(`O desconto de ${this.descontoPorcentagem}% é de R$ ${desconto}`);
        console.log(`O preço com desconto é de R$ ${this.price - desconto}`);
    }
}

const product1 = new Product ("Notebook", "Notebook linux", 2500)

product1.calculateDiscount(25)
product1.addToStock(10);
console.log(product1);