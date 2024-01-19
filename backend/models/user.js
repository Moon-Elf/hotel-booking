const { Schema, model } = require("mongoose");

const userSchema = Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true, unique: true },
  password: {
    type: String,
    required: true,
  },
});

module.exports = model("User", userSchema);
