import { ObjectId } from "mongodb";
import { eCommerceDB } from "../../config/mongodb.js";
import { ApplicationError } from "../../middlewares/errorHandler.js";

export default class CartRepository {
  collection = "carts";

  async add(productID, userID, quantity) {
    try {
      const carts = eCommerceDB(this.collection);
      // insert or update cart using upsert
      // if productID and userID  already exist then it will increment value.
      const cart = await carts.updateOne(
        { productID: new ObjectId(productID), userID: new ObjectId(userID) },
        {
          $inc: { quantity: quantity },
        },
        {
          upsert: true,
        }
      );
      return cart;
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something went wrong with database", 500);
    }
  }

  async get(userID) {
    try {
      const carts = eCommerceDB(this.collection);
      return await carts.find({ userID: new ObjectId(userID) }).toArray();
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something went wrong with database", 500);
    }
  }

  async delete(cartID, userID) {
    try {
      const carts = eCommerceDB(this.collection);
      const result = await carts.deleteOne({
        _id: new ObjectId(cartID),
        userID: new ObjectId(userID),
      });
      return result.deletedCount > 0;
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something went wrong with database", 500);
    }
  }
}
