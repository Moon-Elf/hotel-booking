const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.route("/").post(async (req, res) => {
  if (!req.body.password) return res.status(400).send("Password missing");
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.password, salt);

  const checkUser = await User.findOne({ phone: req.body.phone });
  if (checkUser) return res.status(400).send("Phone number already exists");

  const user = new User({
    name: req.body.name,
    phone: req.body.phone,
    password: hash,
  });

  try {
    await user.save();
    return res.send({
      name: req.body.name,
      phone: req.body.phone,
      _id: user._id,
    });
  } catch (err) {
    return res.status(400).send("Bad Request");
  }
});

router.route("/login").post(async (req, res) => {
  const user = await User.findOne({ phone: req.body.phone });
  if (!user) return res.status(400).send("User not registered");

  try {
    const checkUser = await bcrypt.compare(req.body.password, user.password);
    if (checkUser)
      return res.send({ name: user.name, phone: user.phone, _id: user._id });
    else res.status(400).send("Wrong Password");
  } catch (err) {
    return res.status(400).send("Bad Request");
  }
});

router.route("/check").post(async (req, res) => {
  if (!req.body.phone) return res.status(400).send("Phone number missing");

  const user = await User.findOne({ phone: req.body.phone });
  if (!user) return res.status(400).send({ status: "no" });
  else return res.send({ status: "yes", name: user.name });
});

module.exports = router;
