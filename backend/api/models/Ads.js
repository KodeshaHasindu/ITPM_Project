const mongoose = require("mongoose");

const AdsSchema = new mongoose.Schema(
  {
    adsTitle: { type: String },
    adsImg: { type: String },
    adsImg1: { type: String },
    adsImg2: {type: String},
    adsImg3: {type: String},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ads", AdsSchema);
