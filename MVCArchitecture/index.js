const express = require("express");
const route = require("./routes/userRouter");
const app = express();
const port = 3333;
app.use(express.urlencoded({ extended: true }));

app.use(route);

app.listen(port, () => {
  console.log("server is running on port", port);
});
