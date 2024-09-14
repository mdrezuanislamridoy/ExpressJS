let users = require("../model/users");
const { v4: uuidv4 } = require("uuid");

exports.getAllUsers = (req, res) => {
  res.status(200).json({ users });
};
exports.postAllUsers = (req, res) => {
  const user = {
    id: uuidv4(),
    name: req.query.name,
    email: req.query.email,
  };
  users.push(user);
  res.status(200).json(users);
};
