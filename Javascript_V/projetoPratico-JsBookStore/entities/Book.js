const Product = require ('./Product.js');

class Book extends Product {
    constructor (title, synopsis, genre, pages, author, descripition, price, inStock = 0) {
        super(`Livro: ${title}`, descripition, price);
        this.title = title;
        this.synopsis = synopsis;
        this.genre = genre;
        this.pages = pages;
        this.author = author;
        this.inStock = inStock;
        this.descripition = descripition;
        this.price = price;
    }
}

module.exports = Book;