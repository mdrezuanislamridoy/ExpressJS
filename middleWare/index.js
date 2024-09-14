const express = require("express");
const app = express();
const port = 3333;

app.use(express.static("public"));

const middleWare = (req, res, next) => {
  console.log("middle ware Function");
  next();
};

app.get("/", middleWare, (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log("server is running in port ", port);
});
