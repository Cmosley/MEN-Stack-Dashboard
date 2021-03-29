const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// will gate store functionality to user.role === 'manager'
// will change name to first and last name after MVP 

const userSchema = new Schema(
  {
    name: String,
    email: String,
    avatar: String,
    googleId: String,
    role: String
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);