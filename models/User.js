const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: { type: String, min: 3 },
  username: String,
  password: String, // Never Do this
  email: String,
  mobile: Number,
  country: String,
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

// {
//     "name":"John Dou" ,
//     "username": "john1234",
//     "password": "123456789",
//     "email":"John123@gmail.com",
//     "mobile":46898461,
//     "country":"India",
//     "gender":"male"
// }
