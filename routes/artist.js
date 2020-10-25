const express = require('express');
const router = express.Router();

const artistController = require('../controller/artist');


// GET -> /api/artist  # get artists
router.get('/',artistController.fetch)

// POST -> /api/artist  # get all artists

router.post('/',artistController.insertOne)


// GET -> /api/artist/:id  # get one artist
router.get('/:id',artistController.getOne)


module.exports = router 