class Account {
    #balance //saldo
    //#deposits
    //#loans
    //#transfers


    constructor(user) {
        this.owner = user; //dono da conta
        this.#balance = 0; //saldo inicial
        this.deposits = [];//array de depositos que inicia vazio
        this.loans = [];//array de empréstimos que inicia vazio
        this.transfers = [];//array de transferências que inicia vazio
    }

    getBalance() {
        return this.#balance; //retorna o saldo
    }

    addDeposit(deposit) {
        this.#balance += deposit.value;
        this.deposits.push(deposit);
    }

    AddLoan(loan){
        this.#balance += loan.value;
        this.loans.push(loan);
    }

    addTransfer(transfer) {
        if(transfer.toUser.email === this.owner.email) {
            this.#balance += transfer.value;
            this.transfers.push(transfer)
        }else if(transfer.fromUser.email === this.owner.email){
            this.#balance -= transfer.value;
            this.transfers.push(transfer)
        }
    }
}

module.exports = Account;