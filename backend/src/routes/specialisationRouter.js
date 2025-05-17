const express = require("express");
const Doctordetails = require("../model/Doctordetails");
const checkAuth = require("../middleware/checkAuth");
const Appointment = require("../model/Appointment");
const specialisationRouter = express.Router();


specialisationRouter.get("/doctor/:specialisation", checkAuth,async (req, res) => {
  try {
    const spid = req.params.specialisation;
    const specific = await Doctordetails.find({ specialisation: spid });
    res.status(200).json({
      succes: true,
      error: false,
      data: specific,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: true,
      message: error,
    });
  }
});

specialisationRouter.get("/specificdoctor/:userId",checkAuth, async (req, res) => {
  try {
    const Specificid = req.params.userId;
    const specificdoctordetail = await Doctordetails.findOne({
      _id: Specificid,
    });
    res.status(200).json({
      succes: true,
      error: false,
      data: specificdoctordetail,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: true,
      message: error,
    });
  }
});

specialisationRouter.get("/specificdoctordetails/:email",checkAuth, async (req, res) => {
  try {
    const docid = req.params.email;
    const specificdoc = await Doctordetails.find({email: docid})
    console.log(specificdoc);
    res.status(200).json({
      succes: true,
      error: false,
      data: specificdoc,
    });
  } catch (error) {}
});


module.exports = specialisationRouter;
