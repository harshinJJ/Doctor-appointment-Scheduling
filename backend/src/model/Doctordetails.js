const mongoose = require("mongoose");

const schema = mongoose.Schema;

const doctordet = new schema({
  login_id: { type: mongoose.Types.ObjectId, ref: "Login details" },
  specialisation: { type: String },
  experience: { type: String },
  email: { type: String },
  password: { type: String },
  phonenumber: { type: String, required: true },
  place: { type: String, required: true },
  qualification: { type: String },
  role: { type: String, required: true },
  approval_status: { type: String, require: true, default: "pending" },
});

var Doctordetails = mongoose.model("Doctors", doctordet);
module.exports = Doctordetails;
