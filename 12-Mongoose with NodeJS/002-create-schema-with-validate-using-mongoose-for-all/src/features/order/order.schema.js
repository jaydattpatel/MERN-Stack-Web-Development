import mongoose from "mongoose";

export const OrderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  totalAmount: {
    type: Number,
    min: [1, "Total amount should not be zero."],
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
});

const collection = "orders";

export default OrderModel = mongoose.model(collection, OrderSchema);
