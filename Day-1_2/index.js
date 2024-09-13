const app = require("./app");

const port = app.config.port;

app.listen(port, () => {
  console.log("server is running");
});
