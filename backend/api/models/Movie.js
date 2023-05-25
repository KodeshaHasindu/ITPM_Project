const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    trailer: { type: String },
    creatorFirstName: { type: String },
    creatorLastName: { type: String },
    Email: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);
