# to use Router in express

_first we need to create the router_

```
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("im the get request");
});
router.use((req, res) => {
  res.send(" 404 Error Page");
});

module.exports = router;

```

_then we will call the router and use it_

```
app.use(userRoute);
```

_we can set default location by using this_

```
app.use("/api/user", userRoute);

```
