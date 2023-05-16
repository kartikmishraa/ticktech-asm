const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUser,
  setUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

router.route("/").get(getAllUsers).post(setUser);
router.route("/:userid").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
