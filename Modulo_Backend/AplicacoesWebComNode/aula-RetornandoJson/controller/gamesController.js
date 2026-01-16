const games = [  { id: 1, name: 'Legend of Mana', genres: ['action-rpg'], year: 1999 },
  { id: 2, name: 'World of Warcraft', genres: ['mmorpg'], year: 2004 },
  { id: 3, name: 'Metal Gear Solid', genres: ['stealth', 'action-adventure'], year: 1998 },
  { id: 4, name: 'Sonic Adventure 2', genres: ['platformer'], year: 2001 },
  { id: 5, name: 'Age of Empires 2', genres: ['real-time-strategy'], year: 1999 }
]

module.exports = {
    //GET /games
    index: (req, res) => {
        res.json(games)
    },

    //GET /games/:id
    show: (req, res) => {
        const {id} = req.params
        const game = games.find(game => game.id === +id)
        if(!game){
            res.status(404)
            res.json({message: 'Game not Found'})
            return
        }else{
            res.json(game)
        }
    },
 
    //POST /games
    save: (req, res) => {
        const { name, genres, year } = req.body
        const id = games.length + 1
        const newGame = {
            id: id,
            name,
            genres,
            year
        }
        games.push(newGame)
        res.status(201).json(newGame)// status 201 significa que o recurso foi criado com sucesso
    },

    //POST /games/:id/ganres
    addGenre: (req, res) => {
        const { id } = req.params
        const { genre } = req.body

        const gameIndex = games.findIndex(game => game.id === +id)
        if(gameIndex === -1){
            return res.status(404).json({message: 'Game not Found'})
        }

        if(typeof genre !== 'string' || games[gameIndex].genres.includes(genre)){
            return res.status(400).json({message: 'Invalid genre'})
        }

        games[gameIndex].genres.push(genre)
        res.status(201).json({message: 'Genre added successfully'})
    },

    //PUT /games/:id
    update: (req, res) => {
        const { id } = req.params
        const { name, year } = req.body

        const gameIndex = games.findIndex(game => game.id === +id)
        if(gameIndex === -1){
            return res.status(404).json({message: 'Game not Found'})
        }

        if(typeof name === 'string'){
            games[gameIndex].name = name
            res.status(200).json(games[gameIndex])
        }else{
            return res.status(400).json({message: 'Invalid name'})
        }
        
        if(typeof year === 'number'){
            games[gameIndex].year = year
            res.status(200).json(games[gameIndex])
        }else{
            return res.status(400).json({message: 'Invalid year'})
        }

        
    },

    //DELETE /games/:id
    delete: (req, res) => {
        const { id } = req.params

        const gameIndex = games.findIndex(game => game.id === +id)
        if(gameIndex === -1){
            return res.status(404).json({message: 'Game not Found'})
        }

        games.splice(gameIndex, 1)
        res.status(200).json({message: 'Game deleted successfully'})
    },

    //DELETE /games/:id/genres
    deleteGenres: (req, res) => {
        const { id, name } = req.params

        const gameIndex = games.findIndex(game => game.id === +id)
        if(gameIndex === -1){
            return res.status(404).json({message: 'Game not Found'})
        }

        if (!name || typeof name !== 'string' || !games[gameIndex].genres.includes(name)) {
            return res.status(400).json({ message: 'Invalid genre!' })
        }

        games[gameIndex].genres = games[gameIndex].genres.filter(genre => genre !== name)

        res.status(200).json({message: 'Genre deleted successfully'})
    }
}