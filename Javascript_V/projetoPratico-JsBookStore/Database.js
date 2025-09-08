module.exports = class Database {
    #storage = {
        authors: [],
        books: [],
        posters: [],
        users: [],
        orders: []
    }

    find (key) {
        return this.#storage[key];
    }

    saveAuthor(author) {
        this.#storage.authors.push(author);
    }
    findBookByName(bookTitle) {
        return this.#storage.books.find(b => b.title === bookTitle)
    }

    saveBook(book) {
        const bookExist = this.findBookByName(book.name)
        if (!bookExist){
            this.#storage.books.push(book)
        }  
    }

    addBooksToStock (bookName, quantity) {
        const book = this.findBookByName(bookName)
        book?.addToStock(quantity)
    }

    removeBookFromStock (bookName, quantity) {
        const book = this.findBookByName(bookName)
        book?.removeFromStock(quantity)
    }
    
      findPosterByName(posterName) {
        return this.#storage.posters.find(b => b.name === posterName)
    }

    savePoster(poster) {
        const posterExist =  this.findPosterByName(poster.name)
        if (!posterExist){
            this.#storage.posters.push(poster)
        }       
    }

    addPosterToStock (posterName, quantity) {
        const poster = this.findPosterByName(posterName)
        poster?.addToStock(quantity)
    }

    removePosterFromStock (posterName, quantity) {
        const poster = this.findPosterByName(posterName)
        poster?.removeFromStock(quantity)
    }   

    saveUser (user) {
        const userExist = this.#storage.users.find(u => u.email === user.email)
        if (!userExist) {
            this.#storage.users.push(user)
        }
    }

    saveOrder (order) {
        this.#storage.orders.push(order)
    }

    showStorage() {
        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.posters)
        console.table(this.#storage.users)
        console.table(this.#storage.orders.map(order => order.data))
    }
}