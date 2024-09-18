const router = require("express").Router();
const {
  getUser,
  postUser,
  updateUser,
  deleteUser,
} = require("../controller/userController");

router.get("/", getUser);
router.post("/", postUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
