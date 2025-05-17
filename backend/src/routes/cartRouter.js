const express = require("express");
const Cartitems = require("../model/Cartitems");
const Medicine = require("../model/Medicine");
const { default: mongoose } = require("mongoose");
const Wishlist = require("../model/Wishlist");
const checkAuth = require("../middleware/checkAuth");
const Doctordetails = require("../model/Doctordetails");
const cartRouter = express.Router();

cartRouter.post(
  "/productaddingtocart/:productId/:userId",
  checkAuth,
  async (req, res) => {
    try {
      productid = req.params.productId;
      loginid = req.params.userId;
      const user = await Doctordetails.findOne({ login_id: loginid });
      console.log(user);
      console.log(productid);
      // const productdetails = await Medicine.findOne({ _id: productid });
      const checkingproduct = await Cartitems.findOne({
        product_id: productid,
        user_id: user._id,
      });
      console.log(checkingproduct);

      if (checkingproduct) {
        checkingproduct.quantity += 1;
        console.log(checkingproduct.quantity);
        const data2 = {
          product_id: checkingproduct.product_id,
          quantity: checkingproduct.quantity,
          user_id: checkingproduct.user_id,
        };
        const updateditemquantity = await Cartitems.updateOne(
          { _id: checkingproduct._id },
          { $set: data2 }
        );
        return res.status(200).json({
          success: true,
          error: false,
          message: "added to cart",
          productdetails: updateditemquantity,
        });
      } else {
        const data = {
          product_id: productid,
          quantity: 1,
          user_id: user._id,
        };
        console.log(data);
        const updatedcart = await Cartitems(data).save();
        console.log(updatedcart);
        return res.status(200).json({
          success: true,
          error: false,
          message: "added to cart",
          productdetails: updatedcart,
        });
      }
    } catch (error) {
      return res.status(500).json({
        succes: false,
        error: true,
        message: error,
      });
    }
  }
);
cartRouter.get("/showingcart/:userid", checkAuth, async (req, res) => {
  try {
    const userid = req.params.userid;
    const emailid = await Doctordetails.findOne({ login_id: userid });

    const details = await Cartitems.aggregate([
      {
        $lookup: {
          from: "product details",
          localField: "product_id",
          foreignField: "_id",
          as: "product",
        },
      },
      {
        $lookup: {
          from: "doctors",
          localField: "user_id",
          foreignField: "_id",
          as: "userdetails",
        },
      },

      {
        $unwind: "$product",
      },
      {
        $unwind: "$userdetails",
      },
      {
        $match: {
          user_id: new mongoose.Types.ObjectId(emailid._id),
        },
      },
      {
        $group: {
          _id: "$_id",
          product_qauantity: { $first: "$quantity" },
          product_id: { $first: "$product_id" },
          product_name: { $first: "$product.name" },
          product_price: { $first: "$product.price" },
          user_id: { $first: "$user_id" },
          user_email: { $first: "$userdetails.email" },
          user_name: { $first: "$userdetails.name" },
        },
      },
    ]);
    console.log(details);

    const totalprice = details.reduce((accumulator, item) => {
      const pprice = parseInt(item.product_price);
      const pquantity = parseInt(item.product_qauantity);

      return (accumulator += item.product_price * item.product_qauantity);
    }, 0);
    console.log(totalprice);
    return res.status(200).json({
      success: true,
      error: false,
      message: "items in cart",
      itemsdetail: details,
      totalprice: totalprice,
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      error: true,
      message: error,
    });
  }
});
cartRouter.get(
  "/addingquatityincart/:productId",
  checkAuth,
  async (req, res) => {
    try {
      productid = req.params.productId;
      const itemsdetail = await Cartitems.findOne({ _id: productid });
      itemsdetail.quantity += 1;

      const data = {
        name: itemsdetail.name,
        quantity: itemsdetail.quantity,
      };
      const updateditemquantity = await Cartitems.updateOne(
        { _id: productid },
        { $set: data }
      );
      return res.status(200).json({
        success: true,
        error: false,
        message: "item in cart",
        itemsdetail: updateditemquantity,
        itemquantity: itemsdetail.quantity,
      });
    } catch (error) {
      return res.status(500).json({
        succes: false,
        error: true,
        message: error,
      });
    }
  }
);
cartRouter.get("/deletionitem/:productId", checkAuth, async (req, res) => {
  try {
    productid = req.params.productId;
    const itemsdetail = await Cartitems.findOne({ _id: productid });
    itemsdetail.quantity -= 1;
    if (itemsdetail.quantity === 0) {
      const deleteionitem = await Cartitems.deleteOne({ _id: productid });
      return res.status(200).json({
        success: true,
        error: false,
        message: "removed from cart",
      });
    } else {
      const data = {
        name: itemsdetail.name,
        quantity: itemsdetail.quantity,
      };
      const updateditemquantity = await Cartitems.updateOne(
        { _id: productid },
        { $set: data }
      );
      return res.status(200).json({
        success: true,
        error: false,
        message: "quantity decreased",
        itemsdetail: updateditemquantity,
        itemquantity: itemsdetail.quantity,
      });
    }
  } catch (error) {
    return res.status(500).json({
      succes: false,
      error: true,
      message: error,
    });
  }
});
cartRouter.post("/wishlist/:productId/:userId", checkAuth, async (req, res) => {
  try {
    productid = req.params.productId;
    userid = req.params.userId;
    const checkingproduct = await Wishlist.findOne({
      product_id: productid,
      user_id: userid,
    });
    if (checkingproduct) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "already in wishlist",
        productdetails: checkingproduct,
      });
    } else {
      const data = {
        product_id: productid,
        user_id: userid,
      };
      const updatedwishlist = await Wishlist(data).save();
      return res.status(200).json({
        success: true,
        error: false,
        message: "added to wishlist",
        productdetails: updatedwishlist,
      });
    }
  } catch (error) {
    return res.status(500).json({
      succes: false,
      error: true,
      message: error,
    });
  }
});
cartRouter.get("/showingwishlist/:userid", checkAuth, async (req, res) => {
  try {
    const userid = req.params.userid;
    const details = await Wishlist.aggregate([
      {
        $lookup: {
          from: "product details",
          localField: "product_id",
          foreignField: "_id",
          as: "product",
        },
      },
      {
        $lookup: {
          from: "doctors",
          localField: "user_id",
          foreignField: "_id",
          as: "userdetails",
        },
      },

      {
        $unwind: "$product",
      },
      {
        $unwind: "$userdetails",
      },
      {
        $match: {
          user_id: new mongoose.Types.ObjectId(userid),
        },
      },
      {
        $group: {
          _id: "$_id",
          product_id: { $first: "$product_id" },
          product_name: { $first: "$product.name" },
          product_price: { $first: "$product.price" },
          user_id: { $first: "$user_id" },
          user_email: { $first: "$userdetails.email" },
          user_name: { $first: "$userdetails.name" },
        },
      },
    ]);
    return res.status(200).json({
      success: true,
      error: false,
      message: "items in wishlist",
      itemsdetail: details,
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      error: true,
      message: error,
    });
  }
});

module.exports = cartRouter;
