const express = require("express");
const router = express.Router();
const Room = require("../models/room");

router.route("/").get(async (req, res) => {
  try {
    const rooms = await Room.find();
    setTimeout(() => {
      return res.send(rooms);
    }, 2000);
  } catch (err) {
    return res.status(400).status("Bad Request");
  }
});

router.route("/:id").post(async (req, res) => {
  const id = req.params.id;
  try {
    const room = await Room.findById(id);
    if (!room) res.status("404").send("Not Found");
    return res.status(200).send(room);
  } catch (err) {
    return res.status(404).send("Not Found");
  }
});

module.exports = router;
