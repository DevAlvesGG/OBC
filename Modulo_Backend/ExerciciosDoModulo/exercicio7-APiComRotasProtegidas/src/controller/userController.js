const users = require('../model/users');

module.exports = {
    // GET /users
    index: (req, res)=> {
        const allUsers = users.getAllUsers();
        res.json(allUsers);
    },

    // GET /users/:id
    showUser: (req, res) => {
        const { id } = req.params;
        const user = users.getUserById(+id);

        if(!user){
           return res.status(404).json({message: 'User not found'});
        }
        res.status(200).json(user);
    },

    // POST /users
    save: (req, res) => {
        const { name, email, password, role } = req.body;

        if(typeof name !== 'string' || typeof password !== 'string' || typeof email !== 'string' || typeof role !== 'string' || !role.match(/^(admin|standard)$/)) {
            return res.status(400).json({message: 'Invalid fields'});
        }

        const newUser = users.createUser(name, email, password, role);

        if(!newUser){
            return res.status(400).json({message: 'Email already in use'});
        }
        res.status(201).json(newUser)
    },

    delete: (req, res) => {
        const { id } = req.params;
        const userId = +id
        const user = users.getUserById(userId)

        if(!user){
            return res.status(404).json({ message: "User not found"})
        }
        const userDelete = users.deleteUser(userId)
        return res.status(201).json(userDelete)
    }

}   