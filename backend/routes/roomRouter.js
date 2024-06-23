const express = require("express");
const router = express.Router();
const Room = require("../models/room");

// Helper function to shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Create a new room
router.post("/", async (req, res) => {
  try {
    const newRoom = new Room(req.body);
    await newRoom.save();
    res.status(201).send(newRoom);
  } catch (err) {
    res.status(400).send("Bad Request");
  }
});

// Get all rooms
router.get("/", async (req, res) => {
  try {
    const rooms = await Room.find({}, { "users.phone": 0 });
    const randomizedArray = shuffleArray(rooms);
    setTimeout(() => {
      res.send(randomizedArray);
    }, 2000);
  } catch (err) {
    res.status(400).send("Bad Request");
  }
});

// Get room by ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const room = await Room.findById(id, { "users.phone": 0 });
    if (!room) return res.status(404).send("Not Found");
    res.status(200).send(room);
  } catch (err) {
    res.status(404).send("Not Found");
  }
});

// Update room by ID
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const updatedRoom = await Room.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedRoom) return res.status(404).send("Not Found");
    res.status(200).send(updatedRoom);
  } catch (err) {
    res.status(400).send("Bad Request");
  }
});

// Delete room by ID
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedRoom = await Room.findByIdAndDelete(id);
    if (!deletedRoom) return res.status(404).send("Not Found");
    res.status(200).send(deletedRoom);
  } catch (err) {
    res.status(400).send("Bad Request");
  }
});

// Book a room
router.post("/book/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const room = await Room.findById(id);
    if (!room) return res.status(404).send("Not Found");

    room.users.push(req.body);
    room.bookedCount += 1;
    await room.save();

    res.status(200).send(req.body);
  } catch (err) {
    res.status(404).send("Not Found");
  }
});

module.exports = router;
