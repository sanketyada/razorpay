import crypto from "crypto";
import config from "../config/config.js";
import Razorpayinstance from "../config/razorpay.js";
import PaymentModel from "../model/payment.model.js";
import ProductModel from "../model/product.model.js";

const razorOrder = async (req, res) => {
  const { productId } = req.params;

  const product = await ProductModel.findOne({
    _id: productId,
  });

  if (!product) {
    return res.status(401).json({
      success: false,
      message: "Product not Found.",
    });
  }
  const razorOrder = await Razorpayinstance.orders.create({
    amount: product.price.amount * 100,
    currency: product.price.currency,
    receipt: `orderxys${productId}`,
    partial_payment: false,
    notes: {
      key1: productId,
      key2: product,
    },
  });

  const payment = await PaymentModel.create({
    orderID: razorOrder.id,
    PaymentID: null,
    productID: product._id,
    signature: null,
    amount: product.price.amount,
    currency: product.price.currency,
    status: "pending",
  });

  return res.status(201).json({
    success: true,
    message: "Payment Created",
    data: { payment },
    keyId: config.RAZORPAY_KEY_ID,
  });
};

const verifyOrder = async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  } = req.body;

  console.log(req.body)

  if (
    !razorpay_order_id ||
    !razorpay_payment_id ||
    !razorpay_signature
  ) {
    return res.status(400).json({
      success: false,
      message: "Incomplete payment verification details.",
    });
  }

  const expectedSignature = crypto
    .createHmac("sha256", config.RAZORPAY_KEY_SECRET)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  const signaturesMatch =
    expectedSignature.length === razorpay_signature.length &&
    crypto.timingSafeEqual(
      Buffer.from(expectedSignature),
      Buffer.from(razorpay_signature),
    );

  if (!signaturesMatch) {
    return res.status(400).json({
      success: false,
      message: "Invalid payment signature.",
    });
  }

  const payment = await PaymentModel.findOneAndUpdate(
    { orderID: razorpay_order_id },
    {
      PaymentID: razorpay_payment_id,
      signature: razorpay_signature,
      status: "completed",
    },
    { returnDocument: "after", runValidators: true },
  );

  if (!payment) {
    return res.status(404).json({
      success: false,
      message: "Payment order not found.",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Payment verified successfully.",
    data: { payment },
  });
};

export { razorOrder, verifyOrder };
