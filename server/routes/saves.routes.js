const express = require("express");
const router = express.Router();
const { add, remove, getByUser } = require("../models/saves.model");
// select that users saves and check if they already have the university
// put university county and website into saves
// select users saves
// delete user save
router.put("/add", async (req, res) => {
  const save = req.body;
  if (!save.university || save.website || save.country || save.user_id) {
    return res.send({
      success: false,
      data: null,
      error: "Invalid data provided",
    });
  }
  const resObj = await add(save);
  return res.send(resObj);
});
router.put("/delete/:id/:user_id", async (req, res) => {
  const id = req.params.id;
  const user_id = req.params.user_id;
  const resObj = await remove(id, user_id);

  return res.send(resObj);
});
router.get("/user/:user_id", async (req, res) => {
  const user_id = req.params.user_id;
  const resObj = await getByUser(user_id);
  return res.send(resObj);
});

module.exports = router;
