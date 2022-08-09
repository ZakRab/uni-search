const express = require("express");
const router = express.Router();
const { register, login } = require("../models/users.model");
// get usernames
// post username and password into the db
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!verifyData(username, password)) {
    return res.send({
      success: false,
      data: null,
      error: "Invalid data provided",
    });
  }
  const resObj = await login(username, password);
  res.send(resObj);
});

router.put("/register", async (req, res) => {
  const { username, password } = req.body;
  if (!verifyData(username, password)) {
    return res.send({
      success: false,
      data: null,
      error: "Invalid data provided",
    });
  }

  const resObj = await register(username, password);

  res.send(resObj);
});

function verifyData(username, password) {
  if (!username || username.length > 20 || username.length < 4) {
    return false;
  }
  if (!password || password.length < 8 || password.length > 30) {
    return false;
  }
}

module.exports = router;
