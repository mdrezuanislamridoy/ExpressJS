const router = require("express").Router();
const {
  getAllUsers,
  postAllUsers,
  updateUser,
  deleteUser,
} = require("../controller/userController");

router.get("/", getAllUsers);
router.post("/", postAllUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
