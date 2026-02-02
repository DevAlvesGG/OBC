const users = [
    {   
        id: 1,
        name: 'admin', 
        email: 'admin@admin.com.br',
        password: '123456',
        role: 'admin'
    }
]

module.exports = {
    //function que retorna todos os usuários
    getAllUsers: () => users,

    //function que encontra usuario a partir do id
    getUserById: (id) => users.find(user => user.id === id),

    //function que encontra um usuario a partir do email
    getUserByEmail: (email) => users.find(user => user.email === email),

    //function que registra um usuario
    registerUser: (name, email, password) => {
        const userAlereadyRegistered = users.find(user => user.email === email);
        if(userAlereadyRegistered) {
            return null;
        }
        const newUser = {
            id: users.length + 1,
            name: name,
            email: email,
            password: password,
            role: 'standard'
        }
        users.push(newUser)
        return newUser;
    },

    //function que permite criar usuario admin
    createUser: (name, email, password, role) => {
        const userAlereadyRegistered = users.find(user => user.email === email);
        if(userAlereadyRegistered) {
            return null;
        }
        const newUser = {
            id: users.length + 1,
            name: name,
            email: email,
            password: password,
            role: role
        }
        users.push(newUser)
        return newUser;
    },

    //function para deletar usuario

    deleteUser: (id) => {
        const userIndex = users.findIndex(user => user.id === id)
        if(userIndex === -1) {
            return null;
        }
        const [deletedUser] = users.splice(userIndex, 1);
        return deletedUser;
    }
};