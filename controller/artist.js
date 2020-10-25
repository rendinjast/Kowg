const mongoose = require("mongoose");
const Artist = require("../models/artist");

module.exports = {
  getOne: async (req, res) => {},
  insertOne: async (req, res) => {
    try {
      const artist = new Artist(req.body);
      const result = await artist.save();
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
        query = Artist.find({ name: { $regex: qu.q, $options: "i" } });
      } else {
        query = Artist.find({});
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

      const artists = await query.exec();
      return res.send(artists);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};
