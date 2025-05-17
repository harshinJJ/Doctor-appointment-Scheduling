const express = require("express");
const { default: mongoose } = require("mongoose");
const registerRouter = require("./src/routes/registerRouter");
const loginRouter = require("./src/routes/loginRouter");
const specialisationRouter = require("./src/routes/specialisationRouter");
const adminRouter = require("./src/routes/adminRouter");
const appointmentRouter = require("./src/routes/appointmentRouter");
const cors = require("cors");
const editRouter = require("./src/routes/editRouter");
const productRouter = require("./src/routes/productRouter");
const cartRouter = require("./src/routes/cartRouter");
const Wishlist = require("./src/model/Wishlist");
const app = express();
const mongourl = process.env.MONGODB_URL;
require("dotenv").config();

mongoose
  .connect(mongourl)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log("error:", error);
  });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/Doctor", registerRouter);
app.use("/login", loginRouter);
app.use("/specialisation", specialisationRouter);
app.use("/admin", adminRouter);
app.use("/appointment", appointmentRouter);
app.use("/editor", editRouter);
app.use("/products", productRouter);
app.use("/cart", cartRouter);
app.listen(8080, () => {
  console.log("SERVER STARTED");
});
