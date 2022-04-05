const mongoose = require("mongoose");

const Company = new mongoose.Schema(
  {
    Logo: { type: String },

    CompanyName: { type: String },

    ColorA: { type: String },

    ColorB: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Company", Company);
