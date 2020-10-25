const express = require("express");
const dotenv = require("dotenv").config();
const app = express();



// config
const db = require("./config/db").connect();


// middleware
app.use(express.json());

//routes
const artistRoute    =    require("./routes/artist");
const musicRoute     =    require("./routes/music");
const albumRoute     =    require("./routes/album");
const playlistRoute  =    require("./routes/playlist");
app.use("/api/artist",   artistRoute);
app.use("/api/music",    musicRoute);
app.use("/api/album",    albumRoute);
app.use("/api/playlist", playlistRoute);

const port = process.env.PORT || 6000;

app.listen(port, () => {
  console.log(`application is running on port ${port}`);
});
