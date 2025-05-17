const express = require("express");
const logindetails = require("../model/Logindetails");
const Doctordetails = require("../model/Doctordetails");
const checkAuth = require("../middleware/checkAuth");
const editRouter = express.Router();

editRouter.post("/editdoctor/:email",checkAuth, async (req, res) => {
  try {
    const oldemail = await Doctordetails.findOne({ email: req.body.email });
    const oldphone = await Doctordetails.findOne({
      phonenumber: req.body.phone,
    });
    const emailid = req.params.email;
    const regiterdata = await Doctordetails.findOne({ email: emailid });
    const loginid = regiterdata.login_id;
    const logindata = await logindetails.findOne({ _id: loginid });

    if (oldemail) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Email already exists",
      });
    }
    if (oldphone) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Phonenumber already exists",
      });
    }
    const updatelogindata = {
      email: req.body.email,
      password: logindata.password,
      role: 2,
    };
    const updatefulldata = {
      login_id: loginid,
      name: req.body.name,
      specialisation: req.body.specialisation,
      email: req.body.email,
      experience: req.body.experience,
      phonenumber: req.body.phone,
      place: req.body.place,
      password: regiterdata.password,
      qualification: req.body.qualification,
      role: 2,
    };
    const editdata = await Doctordetails.updateOne(
      { _id: regiterdata._id },
      { $set: updatefulldata }
    );
    const editdata2 = await logindetails.updateOne(
      { _id: loginid },
      { $set: updatelogindata }
    );
    
    return res.status(200).json({
      success: true,
      error: false,
      message: "edited successfully",
      logindata: updatelogindata,
      full_details: updatefulldata,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: true,
      message: "internal server error",
      error: error,
      errormessage: error.message,
    });
  }
});

module.exports = editRouter;
