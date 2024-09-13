const express = require("express");
const bodyParser = require("body-parser");

const port = 3333;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/triangle.html");
});
app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/circle.html");
});

app.post("/triangle", (req, res) => {
  const one = req.body.one;
  const two = req.body.two;
  res.send(`area of triangle is ${one * two}`);
});
app.post("/circle", (req, res) => {
  const one = req.body.one;
  res.send(`area of circle is ${3.1416 * one * one}`);
});

app.listen(port, () => {
  console.log("port is ", port);
});
