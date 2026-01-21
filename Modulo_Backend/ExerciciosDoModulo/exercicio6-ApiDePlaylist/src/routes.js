const express = require('express');
const router = express.Router();
const playlistController = require('./controller/playlistController');

//Rota para deletar playlist
router.delete('/playlists/:id', playlistController.delete)
//Rota para listar playlist selecionada
router.get('/playlists/:id', playlistController.show)
//Rota para listar playlists
router.get('/playlists', playlistController.index)
//Rota para salvar playlists
router.post('/playlists', playlistController.save);
//Rota para deletar música de uma playlist
router.delete('/playlists/:playlistId/music/:musicId', playlistController.deleteMusic)
//Rota para atualizar playlist
router.put('/playlists/:id', playlistController.update)
//Rota para adicionar música a uma playlist
router.post('/playlists/:id', playlistController.addMusic)

module.exports = router;