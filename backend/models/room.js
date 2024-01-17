const { Schema, model } = require("mongoose");

const roomSchema = Schema({
  name: String,
  type: String,
  url: String,
  rating: Number,
  desc: String,
  bookingLimit: Number,
  bookedCount: Number,
  users: [{ name: String, phone: Number }],
  facilities: [{ name: String }],
});

module.exports = model("Room", roomSchema);
