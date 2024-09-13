const express = require("express");
const userRoute = require("./routes/userRoute");
const app = express();

app.use("/api/user", userRoute);
app.config = {
  port: 3000,
};
app.use("/register", (req, res) => {
  // res.status(200).json({
  //   message: "im Register",
  //   statusCode: 200,
  // });
  // res.redirect("/api/user");

  res.statusCode = 200;
  res.cookie("name", "Ridoy");
  res.sendFile(__dirname + "/register.html");
});

module.exports = app;
