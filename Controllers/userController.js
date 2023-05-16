// @route: GET api/users/
// @desc: to get all users
const getAllUsers = (req, res) => {
  res.json({ msg: "get all users" });
};

// @route: GET api/users/:userid
// @desc: to get user data using userid
const getUser = (req, res) => {
  res.json({ msg: "get one user" });
};

// @route: POST api/users/
// @desc: to set user data
const setUser = (req, res) => {
  res.json({ msg: "set user data" });
};

// @route: PUT /api/users/:userid
// @desc: to update user data using userid
const updateUser = (req, res) => {
  res.json({ msg: "update user data" });
};

// @route: DELETE /api/users/:userid
// @desc: to delete user using userid
const deleteUser = (req, res) => {
  res.json({ msg: "delete user data" });
};

module.exports = { getAllUsers, getUser, setUser, updateUser, deleteUser };
