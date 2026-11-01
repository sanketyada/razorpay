// 
import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({ 
    orderID: { type: String, required: true },
    PaymentID:{type: String,},
    productID: { type: String},
    signature: { type: String},
    amount: { type: Number, required: true },
    currency: { type: String, required: true,default: 'INR' },
    status: { type: String,enum:['pending','completed','failed'], required: true }
});

const PaymentModel = mongoose.model('Payment', paymentSchema);
export default PaymentModel;