const express = require("express");

const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.get("/studentID/:id/studentName/:name", (req, res) => {
//   const id = req.query.id;
//   res.send(`id is : ${id}`);
// routes

//   const { id, name } = req.params;
//   res.send(`studentID is : ${id} id is ${name}`);
// });

app.post("/user", (req, res) => {
  const name = req.body.name;
  res.send(`body name ${name}`);
});

app.listen(3000, () => {
  console.log("server is running");
});
