require("dotenv").config();
const express = require("express");

const port = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("hello I'm Home Route");
});

app.listen(port, () => {
  console.log("server is running at port ", port);
});
