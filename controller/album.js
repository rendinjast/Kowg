const mongoose = require("mongoose");
const Album = require("../models/album");

module.exports = {
  getOne: async (req, res) => {},
  insertOne: async (req, res) => {
    try {
      const album = new Album(req.body);
      const result = await album.save();
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
  fetch: async (req, res) => {
    qu = req.body;
    let query;

    try {
      if (qu.q) {
        query = Album.find({ name: { $regex: qu.q, $options: "i" } });
      } else {
        query = Album.find({});
      }
      if (qu.o) {
        switch (qu.o) {
          case "newest":
            query.sort("-date");
            break;
          case "oldest":
            query.sort("date");
            break;
          case "view":
            query.sort("-view.all");
            break;
          case "viewDay":
            query.sort("-view.day");
            break;
          case "viewWeek":
            query.sort("-view.week");
            break;
          case "viewMonth":
            query.sort("-view.month");
            break;
          case "favorite":
            query.sort("-favorite");
        }
      }

      const albums = await query.exec();
      return res.send(albums);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};
