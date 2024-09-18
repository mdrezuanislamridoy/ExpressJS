const { v4: uuidv4 } = require("uuid");
let User = require("../models/User"); // Note: use `let` to allow reassignment

const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

const postUser = async (req, res) => {
  try {
    const newUser = new User({
      id: uuidv4(),
      name: req.body.name,
      email: req.body.email,
    });

    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return console.log("user not found");
  }
  const user = await User.findById(id);

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;

  const updatedUser = await user.save();

  res.status(200).json(updatedUser);
};

const deleteUser = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return console.log("user not found");
  }

  const user = await User.findByIdAndDelete(id);

  res.status(200).json({ message: "User deleted successfully", user });
};

module.exports = { getUser, postUser, updateUser, deleteUser }; //, deleteUser
