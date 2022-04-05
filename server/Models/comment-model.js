const mongoose = require("mongoose");

const Comment = new mongoose.Schema(
  {
    UserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    IdeaId: { type: String },

    Description: { type: Object },
  },
  { timestamps: true }
  
);


module.exports = mongoose.model("Comment", Comment);
