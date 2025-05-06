import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    razorpay_order_id: { type: String, required: true },
    razorpay_payment_id: { type: String },
    razorpay_signature: { type: String },
    amount: { type: Number, required: true }, // in paise
    currency: { type: String, default: "INR" },
    receipt: { type: String },
    status: { type: String, enum: ["created", "paid", "failed"], default: "created" },
    userId: { type: String },
    product: { type: String },     // new field
    quantity: { type: Number },    // new field
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", paymentSchema);
export default Payment;
