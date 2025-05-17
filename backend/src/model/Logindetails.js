const mongoose = require("mongoose");

const schema = mongoose.Schema;

const logindata = new schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
});

var logindetails = mongoose.model("Login details", logindata);
module.exports = logindetails;
