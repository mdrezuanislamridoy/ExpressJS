let users = require("../model/users");
const { v4: uuidv4 } = require("uuid");

// get user
getAllUsers = (req, res) => {
  res.status(200).json({ users });
};

//post user
postAllUsers = (req, res) => {
  const user = {
    id: uuidv4(),
    name: req.query.name,
    email: req.query.email,
  };
  users.push(user);
  res.status(200).json(users);
};

// update user
updateUser = (req, res) => {
  const id = req.params.id;
  const { name, email } = req.query;
  const user = users.find((user) => user.id === id);
  if (user) {
    if (name) user.name = name;
    if (email) user.email = email;
    res.status(299).json({ message: "user Updated", user });
  } else {
    res.status(404).json({ message: "user Not found" });
  }
};

// delete user
deleteUser = (req, res) => {
  const id = req.params.id;
  const { name, email } = req.query;
  const user = users.find((user) => user.id === id);

  if (user) {
    users = users.filter((userr) => userr.id !== id);
    res.status(200).json({ message: "User deleted", users });
  } else {
    res.status(404).json({ message: "user not found" });
  }
};

module.exports = { getAllUsers, updateUser, postAllUsers, deleteUser };
