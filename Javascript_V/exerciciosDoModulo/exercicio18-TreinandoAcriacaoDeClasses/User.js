class User {
    constructor(fullname,email,password) {
        this.fullname = fullname;
        this.email = email;
        this.password = password;
    }
    login (email,password) {
        if (this.email === email && this.password === password){
            console.log(`Usuário ${this.fullname} logado com sucesso!`)
        }else{
            console.log(`Usuário ou senha inválidos!`)
        }
    }
}

const Gustavo = new User("Gustavo", "gustavodevgarcia@gmail.com", "1234");

Gustavo.login("gustavodevgarcia@gmail.com", "1234");
console.log(Gustavo);

