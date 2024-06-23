const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

// Create a new user
router.post("/", async (req, res) => {
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
    res.send({
      name: req.body.name,
      phone: req.body.phone,
      _id: user._id,
    });
  } catch (err) {
    res.status(400).send("Bad Request");
  }
});

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(400).send("Bad Request");
  }
});

// Get user by ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).send("Not Found");
    res.status(200).send(user);
  } catch (err) {
    res.status(404).send("Not Found");
  }
});

// Update user by ID
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedUser) return res.status(404).send("Not Found");
    res.status(200).send(updatedUser);
  } catch (err) {
    res.status(400).send("Bad Request");
  }
});

// Delete user by ID
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) return res.status(404).send("Not Found");
    res.status(200).send(deletedUser);
  } catch (err) {
    res.status(400).send("Bad Request");
  }
});

// User login
router.post("/login", async (req, res) => {
  const user = await User.findOne({ phone: req.body.phone });
  if (!user) return res.status(400).send("User not registered");

  try {
    const checkUser = await bcrypt.compare(req.body.password, user.password);
    if (checkUser)
      res.send({ name: user.name, phone: user.phone, _id: user._id });
    else res.status(400).send("Wrong Password");
  } catch (err) {
    res.status(400).send("Bad Request");
  }
});

// Check if user exists by phone number
router.post("/check", async (req, res) => {
  if (!req.body.phone) return res.status(400).send("Phone number missing");

  const user = await User.findOne({ phone: req.body.phone });
  if (!user) return res.status(400).send({ status: "no" });
  res.send({ status: "yes", name: user.name });
});

module.exports = router;
