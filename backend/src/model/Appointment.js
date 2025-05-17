const mongoose = require("mongoose");
const schema = mongoose.Schema;
const appointmentsetail = new schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  gender: { type: String },
  dob: { type: String },
  timing: { type: String, required: true },
  doctorname: { type: String, required: true },
  doctorspecialisation: { type: String, required: true },
});
var Appointment = mongoose.model("Appointment-details", appointmentsetail);
module.exports = Appointment;
