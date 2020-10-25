const mongoose = require("mongoose");
const shortid = require('shortid');

const artistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: {type:String,default: shortid.generate},
  media: [{ name: String, handle: String }],
  bio: { type: String, default: "not available" },
  date: { type: Date, default: Date.now },
  view: {
    day: { type: Number, default: 0 },
    week: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    all: { type: Number, default: 0 },
  },
  favorite: { type: Number, default: 0 },
});

module.exports = mongoose.model("artist", artistSchema);
