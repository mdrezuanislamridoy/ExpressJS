const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

const staticPath = path.join(__dirname, "/public");
const templatePath = path.join(__dirname, "/template");
const partialPath = path.join(__dirname, "/partial");

app.set("view engine", "hbs");
app.set("views", templatePath);

hbs.registerPartials(partialPath);

app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.render("index", { title: "hello" });
});

app.listen(3000);
