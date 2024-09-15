const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Moved users array outside the POST route handler to store users globally
let users = [];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/user", (req, res) => {
  res.status(200).json({ message: "your users are here", users });
});

app.post("/user", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  let user = { name, email };
  users.push(user);
  res.status(200).json({ message: "User added", users });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
