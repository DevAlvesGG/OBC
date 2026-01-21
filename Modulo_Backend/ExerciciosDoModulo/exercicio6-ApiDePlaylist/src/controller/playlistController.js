const playlist = [
    {
        id: 1,
        name: "My Rock Playlist",
        tag: ["rock", "classic"],
        music: [
            { title: "MC DALESTE", artist: "Queen" },
            { title: "ALEE", artist: "Led Zeppelin" }
        ]
    }
]







module.exports = {

//PUT /playlists/:id
    update: (req, res) => {
        const id = req.params.id;
        const { name, tag } = req.body;

        const playlistIndex = playlist.findIndex(p => p.id === +id)

        if(playlistIndex === -1){
            return res.status(404).json({message: "Playlist Not Found"})
        }

        if(typeof name !== 'string') {
            return res.status(400).json({message: "Name must be a string"})
        }
        if(!Array.isArray(tag)){
            return res.status(400).json({message: "Tag must be an array"})
        }

        playlist[playlistIndex].name = name;
        playlist[playlistIndex].tag = tag;
        res.status(200).json({message:"Playlist update Successful", playlist: playlist[playlistIndex]})
    },

//Delete /playlists/:id
    delete: (req, res) => {
        const id = req.params.id;
        const playlistIndex = playlist.findIndex(p => p.id === +id)

        if(playlistIndex === -1){
            res.status(404).json({message: "Playlist Not Found"})
        }else{
            playlist.slice(playlistIndex, 1)
            res.status(200).json({message: "Playlist Deleted Successfully"})
        }
    },

// DELETE /playlists/:playlistId/music/:musicIndex
    deleteMusic: (req, res) => {
        const { playlistId, musicId } = req.params;

        const playlistIndex = playlist.findIndex(p => p.id === +playlistId);

        if(playlistIndex === -1){
            return res.status(404).json({message: "Playlist Not Found"})
        }

        const musicIndex = playlist[playlistIndex].music.findIndex(m => m.id === +musicId)

        if(musicIndex === -1) {
            return res.status(404).json({message: "Music Not Found"})
        }

        playlist[playlistIndex].music.splice(musicIndex, 1)
        return res.status(200).json({message: "Music Deleted Successfully", playlist: playlist[playlistIndex]})
    },

// POST /playlists/:playlistId/music
    addMusic: (req, res) => {
        const playlistId = req.params.id;
        const { title, artist } = req.body;

        const playlistIndex = playlist.findIndex(p => p.id === +playlistId);

        if(playlistId === -1) {
            return res.status(404).json({message: "Playlist Not Found"})
        }

        if(typeof title !== 'string'){
            return res.status(400).json({message: "Title must be a string"})
        }
        
        if(typeof artist !== 'string') {
            return res.status(400).json({message: "Artist must be a string"})
        }

        playlist[playlistIndex].music.push({title: title, artist: artist, id: Math.floor(Math.random() * 10000)})
        return res.status(201).json({message: "Music added successfully", playlist: playlist[playlistIndex]})
    },


//GET /playlists/:id
    show: (req, res) => {
        const id = req.params.id;
        const playlistId = playlist.find(p => p.id === +id)

        if(!playlistId){
            return res.status(404).json({message: "Playlist Not Found"})
        }else{
            return res.status(200).json(playlistId)
        }
    },

//GET /playlists
    index: (req, res) => {
        res.status(200).json(playlist)
    },

//POST /playlists
    save: (req, res) => {
        const {name, tag, music} = req.body;

        if(typeof name !== 'string'){
            return res.status(400).json({message: 'Name must be a string'});
        }

        if(!Array.isArray(tag)){
            return res.status(400).json({message: 'Tag must be an array'});
        }

        

        const newPlaylist = {
            id: Math.floor(Math.random() * 10000),
            name: name,
            tag: tag,
            music: music ?? []
        }

        playlist.push(newPlaylist);
        res.status(201).json(newPlaylist);
    }
}
