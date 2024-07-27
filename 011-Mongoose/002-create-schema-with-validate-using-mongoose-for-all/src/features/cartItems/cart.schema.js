import mongoose from "mongoose";

export const CartSchema = new mongoose.Schema({
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
    required: true,
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },

  quantity: {
    Type: Number,
    min: [1, "Minimum 1 quantity is required"],
    required: true,
  },
});

const collection = "carts";

const CartModel = mongoose.model(collection, CartSchema);

export default CartModel;
