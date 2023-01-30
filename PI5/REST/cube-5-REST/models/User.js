const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  resetToken: String,
  resetTokenExpiration: Date,
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});


module.exports = mongoose.model("User", userSchema);
