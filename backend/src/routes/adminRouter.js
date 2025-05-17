const express = require("express");
const Doctordetails = require("../model/Doctordetails");
const logindetails = require("../model/Logindetails");
const checkAuth = require("../middleware/checkAuth");
const adminRouter = express.Router();
const Bcrypt = require("bcryptjs");

adminRouter.post("/doctorregister", async (req, res) => {
  try {
    const oldEmail = await logindetails.findOne({ email: req.body.email });
    const oldPhonenumber = await Doctordetails.findOne({
      phonenumber: req.body.phonenumber,
    });
    if (oldEmail || oldPhonenumber) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "user already exists",
      });
    }
    const hashedpwd = await Bcrypt.hash(req.body.password, 12);
    const LoginData = {
      email: req.body.email,
      password: hashedpwd,
      role: req.body.role,
    };
    const loginresult = await logindetails(LoginData).save();
    const RegisterData = {
      login_id: loginresult._id,
      name: req.body.doctorname,
      specialisation: req.body.specialisation,
      email: req.body.email,
      password: req.body.password,
      experience: req.body.experience,
      phonenumber: req.body.phonenumber,
      place: req.body.place,
      qualification: req.body.qualification,
      role: req.body.role,
    };
    const registerresult = await Doctordetails(RegisterData).save();
    if (loginresult && registerresult) {
      return res.status(400).json({
        success: true,
        error: false,
        message: "registration successful",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      errormessage: error.message,
    });
  }
});

adminRouter.get("/delete/:userId",checkAuth, async (req, res) => {
  try {
    const id = req.params.userId;
    const Ddata = await Doctordetails.findOne({ _id: id });
    const id2 = Ddata.login_id;
    const deletedata = await Doctordetails.deleteOne({ _id: id });
    const deletedata2 = await logindetails.deleteOne({ _id: id2 });
    return res.status(400).json({
      success: true,
      error: false,
      message: "deletion Successful",
      deleted_data1: deletedata,
      deleted_data2: deletedata2,
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

adminRouter.post("/edit/:userId", checkAuth,async (req, res) => {
  try {
    const editid = req.params.userId;
    const Edata = await Doctordetails.findOne({ _id: editid });
    const editid2 = Edata.login_id;

    const hashedpwd1 = await Bcrypt.hash(req.body.password, 12);
    const editedlogindata = {
      email: req.body.email,
      password: hashedpwd1,
    };

    const editedregisterdata = {
      login_id: editid2,
      doctorname: req.body.doctorname,
      specialisation: req.body.specialisation,
      email: req.body.email,
      password: req.body.password,
      experience: req.body.experience,
      phonenumber: req.body.phonenumber,
      place: req.body.place,
      qualification: req.body.qualification,
      workinghospitalname: req.body.workinghospitalname,
    };

    const editdata = await Doctordetails.updateOne(
      { _id: editid },
      { $set: editedregisterdata }
    );
    const editdata2 = await logindetails.updateOne(
      { _id: editid2 },
      { $set: editedlogindata }
    );
    return res.status(400).json({
      success: true,
      error: false,
      message: "edited Successful",
      editeddata1: editid,
      editeddata2: editid2,
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

module.exports = adminRouter;
