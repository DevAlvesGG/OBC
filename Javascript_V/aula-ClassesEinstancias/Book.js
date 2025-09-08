class Book { // Classe Book
    constructor(title, author) {// Construtor da classe Book
        this.title = title;
        this.author = author;
        this.published = false;
    }
    publish () { // Método para publicar o livro
        this.published = true;
    }
}

//Instancias da classe Book
const oragon = new Book("Oração de um jovem ateu","Gustavo Alves");
const oragon2 = new Book("Livro doido", "Doido da Silva");

oragon.publish(); // Publica o primeiro livro | chama a instancia . método
oragon2.publish();

console.log(oragon) // Exibe o primeiro livro
console.log(oragon2);

console.log(oragon instanceof Book); // Verifica se oragon é uma instância da classe Book