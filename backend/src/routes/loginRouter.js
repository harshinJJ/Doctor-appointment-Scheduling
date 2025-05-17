const express = require("express");
const logindetails = require("../model/Logindetails");
const loginRouter = express.Router();
const Bcrypt = require("bcryptjs");
const Doctordetails = require("../model/Doctordetails");
const jwt = require("jsonwebtoken");
const checkAuth = require("../middleware/checkAuth");
loginRouter.post("/signin", async (req, res) => {
  try {
    const specificEmail = await logindetails.findOne({
      email: req.body.email,
    });

    if (!specificEmail) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "user not exists",
      });
    }

    const specificpass = specificEmail.password;
    const newpass = req.body.password;

    const token = jwt.sign(
      {
        userId: specificEmail._id,
        email: specificEmail.email,
        role: specificEmail.role,
      },
      "secret_key_3020",
      { expiresIn: "5h" }
    );
    console.log(token);
    const crosspass = await Bcrypt.compare(newpass, specificpass);
    if (!crosspass) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "incorrect password",
      });
    } else {
      return res.status(200).json({
        success: true,
        error: false,
        message: "Login success",
        logindata: specificEmail,
        token: token,
      });
    }

    // if (!specificEmail) {
    //   res.send("user not exists");
    // }
    // if (data2.password !== specificEmail.password) {
    //   res.send("password not match");
    // }
    // if (data2.password === specificEmail.password) {
    //   res.send(data2);
    // }
  } catch (error) {
    return res.status(500).json({
      success: true,
      error: false,
      message: "internal server error",
      error: error,
      errormessage: error.message,
    });
  }
});



loginRouter.post("/edit/:userId", checkAuth, async (req, res) => {
  try {
    const loginid = req.params.userId;
    const regiterdata = await Doctordetails.findOne({ login_id: loginid });
    const registerid = regiterdata._id;

    // const editid = req.params.userId;
    // const Edata = await Doctordetails.findOne({ _id: editid });

    // const editid2 = Edata.login_id;
    // const Edata2 = await Doctordetails.findOne({ _id: editid2 });

    // const oldpass = Edata2.password;
    // const newpass = req.body.password;

    // const comparepassword = await Bcrypt.compare(newpass, oldpass);
    const editedlogindata = {
      email: req.body.email,
      password: registerid.password,
    };

    const editedregisterdata = {
      login_id: loginid,
      doctorname: req.body.name,
      specialisation: req.body.specialisation,
      email: req.body.email,
      password: registerid.password,
      experience: req.body.experience,
      phonenumber: req.body.phone,
      place: req.body.place,
      qualification: req.body.qualification,
    };

    const editdata = await Doctordetails.updateOne(
      { _id: registerid },
      { $set: editedregisterdata }
    );
    const editdata2 = await logindetails.updateOne(
      { _id: loginid },
      { $set: editedlogindata }
    );
    return res.status(400).json({
      success: true,
      error: false,
      message: "edited Successful",
      editeddata1: editdata,
      editeddata2: editdata2,
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

loginRouter.post("/resetpassword/:userId", checkAuth, async (req, res) => {
  try {
    const loginid = req.params.userId;
    const logindata = await logindetails.findOne({ _id: loginid });
    const regdata = await Doctordetails.findOne({ login_id: loginid });

    const newpass = req.body.password;
    const oldpass = logindata.password;

    const comparepassword = await Bcrypt.compare(newpass, oldpass);

    if (!comparepassword) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "wrong current password",
      });
    }

    const hashedpwd2 = await Bcrypt.hash(req.body.password, 12);
    // const confirmpassword = req.body.password1;
    // const newconfirmpassword = req.body.password2;
    if (req.body.password !== req.body.cpassword) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "wrong confirm password",
      });
    }

    const data = {
      email: logindata.email,
      password: hashedpwd2,
    };

    const data2 = {
      login_id: loginid,
      doctorname: regdata.name,
      specialisation: regdata.specialisation,
      email: regdata.email,
      password: req.body.password,
      experience: regdata.experience,
      phonenumber: regdata.phone,
      place: regdata.place,
      qualification: regdata.qualification,
    };
    const updatepassword = await logindetails.updateOne(
      { _id: loginid },
      { $set: data }
    );
    const updatepassword2 = await Doctordetails.updateOne(
      { _id: regdata._id },
      { $set: data2 }
    );
    return res.status(400).json({
      success: true,
      error: false,
      message: "edited Successful",
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
module.exports = loginRouter;
