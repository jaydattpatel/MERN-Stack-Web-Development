import { ApplicationError } from "../../middlewares/errorHandler.js";
import mongoose from "mongoose";
import CartModel from "./cart.schema.js";

export default class CartRepository {
  collection = "carts";

  async add(productID, userID, quantity) {
    try {
      // insert or update cart using upsert
      // if productID and userID  already exist then it will increment value.
      const cartExist = await CartModel.findOne({
        productID: productID,
        userID: userID,
      });
      if (!cartExist) {
        const cart = new CartModel({ productID, userID, quantity });
        await cart.save();
        return cart;
      } else {
        const cart = await CartModel.findOneAndUpdate(
          {
            productID: productID,
            userID: userID,
          },
          {
            $inc: { quantity: quantity },
          },
          {
            new: true,
          }
        );
        return cart;
      }
    } catch (err) {
      console.log(err);
      if (err instanceof mongoose.Error.ValidationError) {
        throw err;
      } else {
        throw new ApplicationError(500, "Something went wrong with database");
      }
    }
  }

  async get(userID) {
    try {
      return await CartModel.find({ userID: userID });
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something went wrong with database", 500);
    }
  }

  async delete(cartID, userID) {
    try {
      const result = await CartModel.deleteOne({
        _id: cartID,
        userID: userID,
      });
      return result.deletedCount > 0;
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something went wrong with database", 500);
    }
  }
}
