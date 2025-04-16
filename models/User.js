const mongoose = require('mongoose');

// Define schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: Number, // Note: Storing passwords as numbers without hashing is insecure
  consumer_number: Number,
  address: String,
  createdAt: { type: Date, default: Date.now }
});

// Create model object
const UserModel = mongoose.model("Users", UserSchema);

module.exports = UserModel;