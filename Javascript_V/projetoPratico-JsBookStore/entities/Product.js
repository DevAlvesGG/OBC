class Product {
    cosntructor (name, descripition, price, inStock = 0) {
        this.name = name;
        this.descripition = descripition;
        this.price = price;
        this.inStock = inStock;
    }

    addToStosk (quantity) {
        this.inStock += quantity;
    }

    removeFromStock (quantity) {
        this.inStock -= quantity;
    }
}

module.exports = Product;