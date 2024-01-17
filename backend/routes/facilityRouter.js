const express = require("express");
const router = express.Router();
const Facility = require("../models/facility");

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

router.route("/").get(async (req, res) => {
  try {
    const facilities = await Facility.find();
    const randomizedArray = shuffleArray(facilities);
    setTimeout(() => {
      return res.send(randomizedArray);
    }, 2000);
  } catch (err) {
    return res.status(400).status("Bad Request");
  }
});

module.exports = router;
