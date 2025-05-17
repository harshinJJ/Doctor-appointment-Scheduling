const { fileLoader } = require("ejs");
const express = require("express");
const multer = require("multer");
const Medicine = require("../model/Medicine");
const checkAuth = require("../middleware/checkAuth");
productRouter = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../appointment-scheduler/public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
// cb(null, "./public/uploads");
const upload = multer({ storage: storage });

productRouter.post(
  "/productsdetailsuploading",
  upload.single("photo"),
  checkAuth,
  (req, res) => {
    try {
      const data = {
        name: req.body.name,
        price: req.body.price,
        catogeries: req.body.catogeries,
        photo: req.file.filename,
      };
      const productdeatils = Medicine(data).save();
      res.send(productdeatils);
      return res.status(200).json({
        success: true,
        error: false,
        message: "Upload Successful",
        productdetails: productdeatils,
      });
    } catch (error) {
      console.log(error);
    }
  }
);

productRouter.get("/productdisplaying", checkAuth, async (req, res) => {
  try {
    const productdisplay = await Medicine.find();
    console.log(productdisplay);
    return res.status(200).json({
      success: true,
      error: false,
      message: "Successful",
      productdisplay: productdisplay,
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

productRouter.get(
  "/productcatogerydetails/:catogeries",
  checkAuth,
  async (req, res) => {
    try {
      const catogeries = req.params.catogeries;
      const productdetails = await Medicine.find({ catogeries: catogeries });
      console.log(productdetails);
      return res.status(200).json({
        success: true,
        error: false,
        message: "Successful",
        productdetails: productdetails,
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
  }
);

productRouter.put("/productedit/:userId", checkAuth, async (req, res) => {
  try {
    const productid = req.params.userId;
    const updatedata = {
      name: req.body.name,
      price: req.body.price,
      catogeries: req.body.catogeries,
      photo: req.file.filename,
    };
    const updateddata = await Medicine.updateOne({ _id: userId });
    return res.status(200).json({
      success: true,
      error: false,
      message: "edited Successful",
      productdetails: updatedata,
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

productRouter.get("/productdeletion/:userId", checkAuth, async (req, res) => {
  try {
    const productid = req.params.userId;
    const deleteproduct = await Medicine.deleteOne({ _id: productid });
    return res.status(200).json({
      success: true,
      error: false,
      message: "detetion Successful",
      productdetails: updatedata,
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
productRouter.get("/productcart/:userId", checkAuth, async (req, res) => {
  try {
    productid = req.params.userId;
    const productdetails = await Medicine.findOne({ _id: productid });
  } catch (error) {}
});

module.exports = productRouter;
