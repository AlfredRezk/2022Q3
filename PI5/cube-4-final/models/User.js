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
  // gender:{
  //     type:string,
  //     enum:['male', 'female', 'other'],
  //     default: 'female'
  // },
//   phone: {
//     type: String,
//     validate: {
//       validator: function (v) {
//         return /\d{3}-\d{3}-\d{4}/.test(v);
//       },
//       message: (props) => `${props.value} is not a valid phone number!`,
//     },
//     required: [true, "User phone number required"],
//   },

  resetToken: String,
  resetTokenExpiration: Date,
});

userSchema.pre("save", async function () {
  // Hash the password and store the user info in the db
  this.password = await bcrypt.hash(this.password, salt);
});


// userSchema.path('phone').validate(function(){
//     return /\d{3}-\d{3}-\d{4}/.test(this.phone);
// }, `${this.phone} is not a valid phone number!`)

module.exports = mongoose.model("User", userSchema);
