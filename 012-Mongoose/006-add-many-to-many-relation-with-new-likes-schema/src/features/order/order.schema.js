import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: [true, "userID is required"],
  },
  totalAmount: {
    type: Number,
    min: [1, "Total amount should not be zero or less."],
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date(),
  },
});

const collection = "orders";

const OrderModel = mongoose.model(collection, OrderSchema);

export default OrderModel;
