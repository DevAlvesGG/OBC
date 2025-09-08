class Deposit {
    constructor(value) {
        this.value = value;
        this.createdAt = new Date();//quando não passamos infomação, ele pega a data do momento atual
    }
}

module.exports = Deposit;