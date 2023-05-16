// const { v4: uuidv4 } = require("uuid");
const uuid = require("uuid");
const uuidv4 = uuid.v4;
const asyncHandler = require("../Middleware/asyncHandler");
const User = require("../Models/user");

let users = [
  {
    id: uuidv4(),
    username: "kartik",
    age: 21,
    hobbies: ["football", "finance", "blockchain"],
  },
  {
    id: uuidv4(),
    username: "manvi",
    age: 10,
    hobbies: ["dancing", "drawing", "kpop"],
  },
];

// @route: GET api/users/
// @desc: to get all users
const getAllUsers = asyncHandler(async (req, res) => {
  // Return all users
  const userData = users;
  res.status(200).json(userData);
});

// @route: GET api/users/:userid
// @desc: to get user data using userid
const getUser = asyncHandler(async (req, res) => {
  const userID = req.params.userid;

  // Validate UserID
  if (!uuid.validate(userID)) {
    res.status(400);
    throw new Error("Invalid UserID");
  }

  const user = users.find((user) => user.id === userID);

  // Return user data
  if (user) res.status(200).json(user);
  else {
    res.status(404);
    throw new Error("User doesn't exist");
  }
});

// @route: POST api/users/
// @desc: to set user data
const setUser = asyncHandler(async (req, res) => {
  const { username, age, hobbies } = req.body;

  // Checking if all fields present
  if (!username || !age || !hobbies) {
    res.status(400);
    throw new Error("Insufficient information");
  }
  // Writing to DB
  else {
    const newUser = new User(uuidv4(), username, age, hobbies);
    users.push(newUser);
    res.status(201).json(newUser);
  }
});

// @route: PUT /api/users/:userid
// @desc: to update user data using userid
const updateUser = asyncHandler(async (req, res) => {
  const userID = req.params.userid;

  // Validate UserID
  if (!uuid.validate(userID)) {
    res.status(400);
    throw new Error("Invalid UserID");
  }

  const user = users.find((user) => user.id === userID);

  // User does not exist
  if (!user) {
    res.status(404);
    throw new Error("User does not exist");
  } else {
    const { username, age, hobbies } = req.body;

    // Checking all fields present
    if (!username || !age || !hobbies) {
      res.status(400);
      throw new Error("Insufficient data");
    }
    // Updating user
    else {
      user.username = username;
      user.age = age;
      user.hobbies = hobbies;

      res.status(200).json(user);
    }
  }
});

// @route: DELETE /api/users/:userid
// @desc: to delete user using userid
const deleteUser = asyncHandler(async (req, res) => {
  const userID = req.params.userid;

  // Validate UserID
  if (!uuid.validate(userID)) {
    res.status(400);
    throw new Error("Invalid UserID");
  }

  const userIndex = users.findIndex((user) => user.id === userID);

  // User does not exist
  if (userIndex === -1) {
    res.status(404);
    throw new Error("User doesn't exist");
  }
  // Delete user
  else {
    users.splice(userIndex, 1);
    res.status(204);
  }
});

module.exports = { getAllUsers, getUser, setUser, updateUser, deleteUser };
