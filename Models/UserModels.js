const mongoose = require("mongoose");
const User = new mongoose.Schema({
  name: { type: String, required: true },
  emailid: { type: String, required: true },
  phone: { type: Number, required: true },
  option: { type: String },
  message: { type: String },
});
const UserDB = mongoose.model('BTL_Enquiry', User);

module.exports = UserDB;
