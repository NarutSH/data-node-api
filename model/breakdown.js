const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema(
  {
    machine: { type: String, required: true, trim: true },
    problem_type: {
      problem_id: {
        type: Number,
      },
      problem_name: {
        type: String,
      },
    },
    problem_detail: {
      type: String,
    },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
    },
  },
  {
    collection: "breakdowns",
  }
);

const user = mongoose.model("Breakdowns", schema);

module.exports = user;
