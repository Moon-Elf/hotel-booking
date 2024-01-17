const { Schema, model } = require("mongoose");

const facilitySchema = Schema({
  name: String,
  slug: String,
});

module.exports = model("Facility", facilitySchema);
