const mongoose = require("mongoose");
const View = require("../models/view");

module.exports = {
  insert: async (req, res) => {
    try {
        const view = new View(req.body)
        const result = await view.save()
        res.status(201).send(result)
    } catch (error) {
      console.log(error.message);
    }
  },
  sortBy: async (req, res) => {},
};
