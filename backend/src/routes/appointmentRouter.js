const express = require("express");
const Appointment = require("../model/Appointment");
const Doctordetails = require("../model/Doctordetails");
const checkAuth = require("../middleware/checkAuth");
const appointmentRouter = express.Router();

appointmentRouter.post("/scheduling/:userId",checkAuth, async (req, res) => {
  try {
    const id = req.params.userId;
    const docdetails = await Doctordetails.findOne({ _id: id });
    const appointmentdetails = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      dob: req.body.dob,
      timing: req.body.timing,
      doctorname: docdetails.name,
      doctorspecialisation: docdetails.specialisation,
    };
    const appointments = Appointment(appointmentdetails).save();
    return res.status(200).json({
      success: true,
      error: false,
      message: "Booking Successful",
      Bookingdetail: appointments,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: "internal server error",
      error: error,
      errormessage: error.message,
    });
  }
});
appointmentRouter.get("/bookingdetails/:email",checkAuth, async (req, res) => {
  const emailid = req.params.email;
  console.log(emailid);
  const patient = await Appointment.find({ email: emailid });
  console.log(patient);
  res.status(200).json({
    succes: true,
    error: false,
    data: patient,
  });
});

module.exports = appointmentRouter;
