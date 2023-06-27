const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema(
  {
    first_name: { type: String, required: true, trim: true },
    last_name: { type: String, required: true, trim: true },
    username: {
      type: String,
      required: true,
      trim: true,
      length: { min: 3 },
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      length: { min: 3, max: 8 },
    },
    role: { type: String, required: true },
  },
  {
    collection: "users",
  }
);

const user = mongoose.model("Users", schema);

module.exports = user;
