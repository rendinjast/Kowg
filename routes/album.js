const express = require('express');
const router = express.Router();

const albumController = require('../controller/album');


// GET -> /api/album  # get all albums
router.get('/',albumController.fetch)

// POST -> /api/album  # get all albums
router.post('/',albumController.insertOne)


// GET -> /api/album/:id  # get one album
router.get('/:id',albumController.getOne)


module.exports = router 