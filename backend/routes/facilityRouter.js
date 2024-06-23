const express = require("express");
const router = express.Router();
const Facility = require("../models/facility");

// Helper function to shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Create a new facility
router.post("/", async (req, res) => {
  try {
    const newFacility = new Facility(req.body);
    await newFacility.save();
    res.status(201).send(newFacility);
  } catch (err) {
    res.status(400).send("Bad Request");
  }
});

// Get all facilities
router.get("/", async (req, res) => {
  try {
    const facilities = await Facility.find();
    const randomizedArray = shuffleArray(facilities);
    setTimeout(() => {
      res.send(randomizedArray);
    }, 2000);
  } catch (err) {
    res.status(400).send("Bad Request");
  }
});

// Get facility by ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const facility = await Facility.findById(id);
    if (!facility) return res.status(404).send("Not Found");
    res.status(200).send(facility);
  } catch (err) {
    res.status(404).send("Not Found");
  }
});

// Update facility by ID
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const updatedFacility = await Facility.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedFacility) return res.status(404).send("Not Found");
    res.status(200).send(updatedFacility);
  } catch (err) {
    res.status(400).send("Bad Request");
  }
});

// Delete facility by ID
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedFacility = await Facility.findByIdAndDelete(id);
    if (!deletedFacility) return res.status(404).send("Not Found");
    res.status(200).send(deletedFacility);
  } catch (err) {
    res.status(400).send("Bad Request");
  }
});

module.exports = router;
