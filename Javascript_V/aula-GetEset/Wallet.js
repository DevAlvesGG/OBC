class Wallet {
   #amount
   #userName
    constructor() {
        this.#amount = 100.99 * 100;
        this.#userName = 'John Doe';
    }

    get amount() {
        return this.#amount / 100;
    }

    set userName ( name) {
        this.#userName = name;
    }
    get userName() {
        return this.#userName;
    }
}

const wallet = new Wallet();    

console.log(wallet.amount); // 100.99

wallet.userName = 'Gustavo';

console.log(wallet.userName); // John Doe


