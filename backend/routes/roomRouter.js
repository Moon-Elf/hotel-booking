const express = require("express");
const router = express.Router();
const Room = require("../models/room");

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

router.route("/").get(async (req, res) => {
  try {
    const rooms = await Room.find({}, { "users.phone": 0 });
    const randomizedArray = shuffleArray(rooms);
    setTimeout(() => {
      return res.send(randomizedArray);
    }, 2000);
  } catch (err) {
    return res.status(400).status("Bad Request");
  }
});

router.route("/:id").get(async (req, res) => {
  const id = req.params.id;
  try {
    const room = await Room.findById(id, { "users.phone": 0 });
    if (!room) res.status("404").send("Not Found");
    return res.status(200).send(room);
  } catch (err) {
    return res.status(404).send("Not Found");
  }
});

router.route("/book/:id").post(async (req, res) => {
  const id = req.params.id;
  try {
    const room = await Room.findById(id);
    if (!room) res.status("404").send("Not Found");

    room.users.push(req.body);
    room.bookedCount += 1;
    room.save();

    return res.status(200).send(req.body);
  } catch (err) {
    return res.status(404).send("Not Found");
  }
});

module.exports = router;
