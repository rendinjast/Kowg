const express = require('express');
const router = express.Router();

const viewController = require('../controller/view');


// POST -> /api/view  # get all views
router.post('/',viewController.insert)

// GET -> /api/view/search?  # order list of views by search, view and popularity
router.get('/:type/:period',viewController.sortBy)



module.exports = router 