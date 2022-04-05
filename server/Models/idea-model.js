const mongoose = require("mongoose");

const Idea = new mongoose.Schema(
  {
    Category: { type: String, required: true },

    IdeaTitle: { type: String },

    Description: { type: Object },

    Status: { type: String, required: true },

    Archive: { type: Boolean, default: false },

    Likes: { type: Array },

    Views: { type: Array },

    UserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  },
  { timestamps: true }
);



module.exports = mongoose.model("Idea", Idea);
