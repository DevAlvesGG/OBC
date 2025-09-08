class Account {
    email; // Atributo privado
    #password; // Atributo privado
    #balance = 0; // Atributo privado
    constructor(user){
        this.email = user.email;
        this.#password = user.password;
    }

    getBalance(email, password) {
        if (this.email == email && this.#password == password) {
           return this.#balance
        }else {
            return "Email ou senha incorretos";
        }
    }
}

const user = {
    email: "gustavodevgarcia@gmail.com",
    password: "123456"
}

const myAccount = new Account(user);

console.log(myAccount.getBalance("gustavodevgarcia@gmail.com", "123456")); // Output: Email ou senha incorretos

//myAccount.password = "newpassword"; //assim é possivel alterar a senha, pois o atributo é público
//console.log(myAccount) // Output: