const express = require('express');
const router = express.Router();

const playlistController = require('../controller/playlist');


// GET -> /api/playlist  # get all playlists
router.get('/',playlistController.fetch)

// GET -> /api/playlist/:id  # get one playlist
router.get('/:id',playlistController.getOne)


module.exports = router 