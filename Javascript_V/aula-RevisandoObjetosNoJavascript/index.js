/*const book = {
    title: "JavaScript Essentials",
    pages: 300,
    published: true,
    inStock: 20,
    tags: ["programming", "javascript", "web development"],
    author: {
        name: "John Doe",
    },
    addOnStock(quantity) {
        this.inStock += quantity;
    }
}


book.addOnStock(10);

console.log(book); // Output: JavaScript Essentials

book.save = function() {
    //salva no banco de dados
}

console.log(book.save); */


function Book (title, pages, tags, author) {
    this.title = title;
    this.pages = pages;
    this.tags = tags;
    this.author = author
    this.published = false;
    this.inStock = 0;
    this.addOnStock = function(quantity){
        this.inStock += quantity;
    }
    this.save = function (){
        //salva no banco de dados 
    }
}

const novoLivro = new Book("Clean Code",500, ["programming", "clean code"], {name: "Robert C. Martin"});

console.log(novoLivro);

