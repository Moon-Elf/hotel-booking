const { Schema, model } = require("mongoose");

const categorySchema = Schema({
  name: String,
  slug: String,
});

module.exports = model("Category", categorySchema);
