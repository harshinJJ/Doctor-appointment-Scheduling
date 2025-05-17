const mongoose = require("mongoose");
const schema = mongoose.Schema;

const productdetails = new schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  catogeries: { type: String, required: true },
  photo: { type: String, required: true },
});

const Medicine = mongoose.model("Product details", productdetails);
module.exports = Medicine;
