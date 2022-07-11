const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please, enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please, provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please, provide a valid email"],
  },
  photo: String,
  role: {
    type: String,
    default: "user",
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please, confirm your password"],
    validate: {
      validator: function (item) {
        return item === this.password;
      },
      message: "passwords do not match",
    },
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;