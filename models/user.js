const mongoose = require("mongoose");

// Define the User schema
const UserSchema = new mongoose.Schema({
  mobile: Number,
  firstname: String,
  productType: String,
  productCount: Number
});

// Create the User model
const UserModel = mongoose.model("User", UserSchema); // Use "User" instead of "user" for better naming conventions

module.exports = UserModel;
