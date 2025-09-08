const Deposit = require("./Deposit")
const Loan = require("./Loan")
const Transfer = require("./Transfer")
const User = require("./User")

class App {
    // Declara uma propriedade estática privada chamada '#users' que é um array vazio.
    // Esta propriedade armazenará os usuários da aplicação.
    static #users = []

    // Declara um método estático chamado 'findUser' que recebe um email como argumento.
    static findUser(email) {
        // Usa o método 'find' para procurar um usuário no array '#users' cujo email corresponde ao email fornecido.
        const user = this.#users.find(user => user.email === email)
        // Retorna o usuário encontrado ou 'null' se nenhum usuário for encontrado.
        return user ?? null
    }

    // Declara um método estático chamado 'createUser' que recebe um email e um fullname como argumentos.
    static createUser(email, fullname) {
        // Chama o método 'findUser' para verificar se um usuário com o email fornecido já existe.
        const userExist = App.findUser(email)
        // Se o usuário não existir (!userExist é verdadeiro)...
        if(!userExist) {
            // Cria uma nova instância de 'User' com o email e fullname fornecidos e a adiciona ao array '#users'.
            // Assumo que existe uma classe 'User' definida em outro lugar no código.
            this.#users.push(new User(email, fullname))
        }
    }

    static deposit(email, value) {
        const user = App.findUser(email)

        if(user) {
            const newDeposit = new Deposit(value)
            user.account.addDeposit(newDeposit)
        }
    }

    static transfer(fromUserEmail, toUserEmail, value){
        const fromUser = App.findUser(fromUserEmail)
        const toUser = App.findUser(toUserEmail)

        if (fromUser && toUser) {
            const newTransfer = new Transfer(fromUser, toUser, value)
            fromUser.account.addTransfer(newTransfer)
            toUser.account.addTransfer(newTransfer)
        }
    }

    static takeLoan(email, value, numberOfInstallments) {
        const user = App.findUser(email)

        if(user) {
            const newLoan = new Loan(value, numberOfInstallments)
            user.account.AddLoan(newLoan)
        }
    }

    static changeLoanFee(newFeePercentage) {
        Loan.fee = newFeePercentage
    }
}

module.exports = App; 