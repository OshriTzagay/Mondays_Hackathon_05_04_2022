const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    FirstName: { type: String, required: true },

    LastName: { type: String, required: true },

    Age: { type: Number },

    Ideas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Idea" }],

    Email: { type: String, required: true, unique: true },

    Position: { type: String, required: true },

    Password: { type: String, required: true },

    Rank: { type: Number, default: 0 },

    LastLogin: { type: Date, default: Date.now },

    isLogin: { type: Boolean, default: false },

    isAdmin: { type: Boolean, default: false },

    Role: { type: String },

    ProfilePic: { type: String },

    Company:  { type: mongoose.Schema.Types.ObjectId, ref: "Company" } , 
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", User);
