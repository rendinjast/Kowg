const mongoose = require("mongoose");
const Playlist = require("../models/playlist");

module.exports = {
  getOne: async (req, res) => {},
  insertOne: async (req, res) => {
    try {
      const playlist = new Playlist(req.body);
      const result = await playlist.save();
      res.status(201).send(result);
    } catch (error) {
      console.log(error.message);
    }
  },
  fetch: async (req, res) => {
    qu = req.body;
    let query;

    try {
      if (qu.q) {
        query = Playlist.find({ name: { $regex: qu.q, $options: "i" } });
      } else {
        query = Playlist.find({});
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

      const playlists = await query.exec();
      return res.send(playlists);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};
