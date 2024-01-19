const { Schema, model } = require("mongoose");

const roomSchema = Schema({
  name: String,
  url: String,
  rating: Number,
  desc: String,
  bookingLimit: Number,
  bookedCount: Number,
  users: [{ _id: String, name: String, phone: Number }],
  facilities: [String],
});

module.exports = model("Room", roomSchema);
