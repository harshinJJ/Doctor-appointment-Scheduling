const express = require("express");
const Doctordetails = require("../model/Doctordetails");
const logindetails = require("../model/Logindetails");
const registerRouter = express.Router();
const Bcrypt = require("bcryptjs");
registerRouter.post("/doctorregister", async (req, res) => {
  try {
    const oldEmail = await Doctordetails.findOne({
      email: req.body.email,
    });
    const oldPhonenumber = await Doctordetails.findOne({
      phonenumber: req.body.phone,
    });
    if (oldEmail) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Email already exists",
      });
    }
    if (oldPhonenumber) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Phonenumber already exists",
      });
    }
    if (req.body.password !== req.body.cpassword) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "wrong confirm password",
      });
    }
    const hashedpwd = await Bcrypt.hash(req.body.password, 12);
    const logData = {
      email: req.body.email,
      password: hashedpwd,
      role: 2,
    };

    const logResult = await logindetails(logData).save();
    console.log(logData);

    const regData = {
      login_id: logResult._id,
      name: req.body.name,
      specialisation: req.body.specialisation,
      email: req.body.email,
      password: req.body.password,
      experience: req.body.experience,
      phonenumber: req.body.phone,
      place: req.body.place,
      qualification: req.body.qualification,
      role: 2,
    };
    console.log(regData);
    const regResult = await Doctordetails(regData).save();
    if (logResult && regResult) {
      return res.status(200).json({
        success: true,
        error: false,
        message: "Registration Successful",
        logindetail: logResult,
        registerdetail: regResult,
      });
    }
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

registerRouter.post("/userregister", async (req, res) => {
  try {
    const oldEmail = await Doctordetails.findOne({
      email: req.body.email,
    });
    const oldPhonenumber = await Doctordetails.findOne({
      phonenumber: req.body.phone,
    });
    if (oldEmail || oldPhonenumber) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "user already exists",
      });
    }
    if (req.body.password !== req.body.cpassword) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "wrong confirm password",
      });
    }
    const hashedpwd = await Bcrypt.hash(req.body.password, 12);
    const logData = {
      email: req.body.email,
      password: hashedpwd,
      role: 3,
    };

    const logResult = await logindetails(logData).save();
    console.log(logData);

    const regData = {
      login_id: logResult._id,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phonenumber: req.body.phone,
      place: req.body.place,
      role: 3,
    };
    console.log(regData);
    const regResult = await Doctordetails(regData).save();
    if (logResult && regResult) {
      return res.status(200).json({
        success: true,
        error: false,
        message: "Registration Successful",
        logindetail: logResult,
        registerdetail: regResult,
      });
    }
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

module.exports = registerRouter;
