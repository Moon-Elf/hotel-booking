const { Schema, model } = require("mongoose");

const roomTypeSchema = Schema({
  name: String,
  slug: String,
  url: String,
});

module.exports = model("Room Type", roomTypeSchema);
