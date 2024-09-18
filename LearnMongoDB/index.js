const express = require("express");
const router = require("./routes/userRouter");
const cors = require("cors");
const path = require("path");
const config = require("./config/config");
require("./config/db");

const app = express();

app.use(express.static(path.join(__dirname, "views")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/users", router);

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

const port = config.app.port;

app.listen(port, () => {
  console.log("Server is running on port", port);
});
