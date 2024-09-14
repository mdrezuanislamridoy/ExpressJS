const router = require("express").Router();
const { getAllUsers, postAllUsers } = require("../controller/userController");

router.get("/", getAllUsers);
router.post("/", postAllUsers);

module.exports = router;
