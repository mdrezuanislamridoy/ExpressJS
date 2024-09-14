const express = require("express");

const app = express();

app.get("/products/:id([0-9]+)", (req, res) => {
  res.send(`Your product ID is ${req.params.id}`);
});

app.get("/products", (req, res) => {
  const id = req.query.id;
  if (id) {
    res.send(`Your product query ID is ${id}`);
  } else {
    res.send("No product ID provided in the query");
  }
});

app.listen(3000);
