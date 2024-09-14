const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRoutes");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/index.html");
});

app.use((req, res) => {
  res.status(404).json({ message: "Page Not Found" });
});

// server err
app.use((err, req, res, next) => {
  res.status(5000).json({ message: "Something went wrong" });
});
module.exports = app;
