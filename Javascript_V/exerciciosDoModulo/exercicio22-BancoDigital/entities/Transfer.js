class Transfer {
    constructor(fromUser, toUser, value) {
        this.fromUser = fromUser;
        this.toUser = toUser;
        this.value = value;
        this.createdAt = new Date();//data da criação(momento atual)
    
    }
}

module.exports = Transfer;