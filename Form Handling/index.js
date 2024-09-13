const express = require("express");
const bodyParser = require("body-parser");

const port = 3333;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/register", (req, res) => {
  const one = req.body.one;
  const two = req.body.two;
  res.send(`<h1>calculation is  ${parseInt(one) + parseInt(two)}</h1>`);
});
app.listen(port, () => {
  console.log("port is ", port);
});
