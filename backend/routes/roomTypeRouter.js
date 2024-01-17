const express = require("express");
const router = express.Router();
const RoomType = require("../models/roomType");

router.route("/").get(async (req, res) => {
  try {
    const roomTypes = await RoomType.find();
    setTimeout(() => {
      return res.send(roomTypes);
    }, 2000);
  } catch (err) {
    return res.status(400).status("Bad Request");
  }
});

module.exports = router;
