const express = require("express");
const userRoute = require("./routes/userRoute");
const app = express();

app.use("/api/user", userRoute);
app.config = {
  port: 3000,
};

module.exports = app;
