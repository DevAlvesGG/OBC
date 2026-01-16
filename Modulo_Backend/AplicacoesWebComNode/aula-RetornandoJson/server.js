const express = require('express');
const gamesController = require('./controller/gamesController');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/games', gamesController.index)
app.get('/games/:id', gamesController.show)
app.post('/games', gamesController.save)
app.post('/games/:id/genres',gamesController.addGenre)
app.put('/games/:id', gamesController.update)
app.delete('/games/:id', gamesController.delete)
app.delete('/games/:id/:name', gamesController.deleteGenres)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});