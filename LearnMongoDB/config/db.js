const mongoose = require("mongoose");
const config = require("./config");

const DB_URL = config.db.URL;

mongoose
  .connect(DB_URL)
  .then(console.log("Db is connected"))
  .catch((err) => console.log("something went wrong"));
// process.exit(1);
