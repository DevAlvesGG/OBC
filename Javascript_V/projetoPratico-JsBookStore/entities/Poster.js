const Product = require('./Product');


class Poster extends Product{
    constructor (name, description, heigth, width, price, inStock = 0) {
        super(name, description, price, inStock) 
        this.heigth = heigth;
        this.width = width;
    }
}

module.exports = Poster;