const Account = require("./Account");

class User {
    constructor(email, fullname) {
        this.email = email;
        this.fullname = fullname;
        this.account = new Account(this)
    }
}

module.exports = User;