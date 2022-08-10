const express = require("express");
const router = express.Router();
const { add, remove, getByUser } = require("../models/saves.model");
const auth = require("../middleware/auth.middleware");
router.put("/add", auth, async (req, res) => {
  const save = req.body;
  if (!save.university || save.website || save.country) {
    return res.send({
      success: false,
      data: null,
      error: "Invalid data provided",
    });
  }
  const resObj = await add({ ...save, user_id: req.user.id });
  return res.send(resObj);
});
router.put("/delete/:university", auth, async (req, res) => {
  const university = req.params.university;
  const resObj = await remove(university, req.user.id);

  return res.send(resObj);
});
router.get("/user", auth, async (req, res) => {
  const resObj = await getByUser(req.user.id);
  return res.send(resObj);
});

module.exports = router;
