const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userid: {
    type: Number,
    required: true,
  },
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  mobilenumber: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
});

const users = new mongoose.model("users", userSchema);
module.exports = users;
