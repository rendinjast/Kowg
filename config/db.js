const mongoose = require("mongoose");

exports.connect = async () => {
  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true,useUnifiedTopology: true });
  const db = mongoose.connection;
  db.on("error", err => {
    console.log(err);
  });
  db.on("open", () => {
    console.log("connected to the database");
  });
};
