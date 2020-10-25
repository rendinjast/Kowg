const express = require('express');
const router = express.Router();

const musicController = require('../controller/music');


// GET -> /api/music  # get all musics
router.get('/',musicController.fetch)

// POST -> /api/music  # insert
router.post('/',musicController.insertOne)

// GET -> /api/music/:id  # get one music
router.get('/:id',musicController.getOne)


module.exports = router 