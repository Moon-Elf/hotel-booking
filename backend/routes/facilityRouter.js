const express = require("express");
const router = express.Router();
const Facility = require("../models/facility");

router.route("/").get(async (req, res) => {
  try {
    const facilities = await Facility.find();
    setTimeout(() => {
      return res.send(facilities);
    }, 2000);
  } catch (err) {
    return res.status(400).status("Bad Request");
  }
});

module.exports = router;
