const { Schema, model } = require("mongoose");

const roomSchema = Schema({
  name: String,
  url: String,
  rating: Number,
  description: String,
  bookingLimit: Number,
  bookedCount: Number,
  price: String,
  users: [{ _id: String, name: String, phone: Number }],
  facilities: [String],
});

module.exports = model("Room", roomSchema);
