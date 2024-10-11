import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
    required: [true, "productID is required\n"],
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: [true, "userID is required\n"],
  },
  quantity: {
    type: Number,
    min: [1, "Minimum 1 quantity is required"],
    required: [true, "quantity is required\n"],
  },
});

const collection = "carts";

const CartModel = mongoose.model(collection, CartSchema);

export default CartModel;
