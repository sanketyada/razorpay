import express from "express";
import ProductModel from "../model/product.model.js";
import Razorpayinstance from "../config/razorpay.js";
import PaymentModel from "../model/payment.model.js";
import config from "../config/config.js";
import  {razorOrder, verifyOrder } from "../contollers/razor.contollers.js";


const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to payment Routes.");
});
router.post("/:productId/order",razorOrder);
router.post("/verify",verifyOrder);

export default router;
