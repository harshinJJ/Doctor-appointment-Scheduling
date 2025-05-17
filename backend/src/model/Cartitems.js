const mongoose = require("mongoose");
const schema = mongoose.Schema;
const productdetails = new schema({
  product_id: { type: mongoose.Types.ObjectId, ref: "Product details" },
  user_id: { type: mongoose.Types.ObjectId, ref: "doctors" },

  // name: { type: String, required: true },
  // price: { type: Number, required: true },
  // catogeries: { type: String, required: true },
  // photo: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const Cartitems = mongoose.model("cart details", productdetails);
module.exports = Cartitems;
