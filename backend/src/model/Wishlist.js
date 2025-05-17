const mongoose = require("mongoose");
const schema = mongoose.Schema;
const productdetails = new schema({
  product_id: { type: mongoose.Types.ObjectId, ref: "Product details" },
  user_id: { type: mongoose.Types.ObjectId, ref: "doctors" },

  // name: { type: String, required: true },
  // price: { type: Number, required: true },
  // catogeries: { type: String, required: true },
  // photo: { type: String, required: true },
});
const Wishlist = mongoose.model("wishlistdetails", productdetails);
module.exports = Wishlist;
