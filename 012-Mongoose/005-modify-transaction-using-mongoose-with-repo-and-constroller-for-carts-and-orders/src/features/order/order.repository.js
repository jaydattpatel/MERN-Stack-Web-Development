import { ApplicationError } from "../../middlewares/errorHandler.js";
import mongoose from "mongoose";
import OrderModel from "./order.schema.js";
import ProductModel from "../product/product.schema.js";
import CartModel from "../cartItems/cart.schema.js";

export default class OrderRepository {
  collection = "orders";

  async placeOrder(userId) {
    // Using Mongoose's default connection
    const session = await mongoose.startSession();
    // Using for custom connection
    // const db = await mongoose.createConnection(mongodbUri).asPromise();
    // const session = await db.startSession();

    try {
      session.startTransaction();
      // 1. Get carts and calculate total amount.
      const items = await this.getTotalAmount(userId, session);
      console.log("Items : ", items);
      const finalTotalAmount = items.reduce(
        (acc, item) => acc + item.totalAmount,
        0
      );
      // console.log(items, "\n", finalTotalAmount);
      // 2. Create an order record.
      const newOrder = {
        userID: userId,
        totalAmount: finalTotalAmount,
        timestamp: new Date(),
      };
      // console.log(newOrder);

      const order = new OrderModel(newOrder);
      await order.save({ session });
      // await OrderModel.insertOne(newOrder, { session });

      // 3. Reduce the stock in product collection.
      for (let item of items) {
        await ProductModel.updateOne(
          { _id: item.productID },
          // reduce stock by negative value increment
          { $inc: { stock: -item.quantity } },
          { session }
        );
      }
      // throw new Error("Something is wrong in placeOrder");
      // 4. Clear the cart items from carts collection.
      await CartModel.deleteMany(
        {
          userID: userId,
        },
        { session }
      );
      await session.commitTransaction();
      return order;
    } catch (err) {
      console.log(err);
      await session.abortTransaction(); // if err then abort transaction
      throw new ApplicationError(500, "Transaction Aborted.");
    } finally {
      await session.endSession();
    }
  }

  async getTotalAmount(userId, session) {
    const items = await CartModel.aggregate(
      [
        // 1. select all cart items for the userId
        {
          $match: { userID: new mongoose.Types.ObjectId(userId) },
        },
        // 2. Get the products form products collection.
        {
          $lookup: {
            from: "products", // from "product" collection
            localField: "productID", // "productID" from carts collection to match
            foreignField: "_id", // "_id" from products collection to match
            as: "productInfo", // specifies the name of the new array field
          },
        },
        // 3. Unwind the productInfo.
        {
          $unwind: "$productInfo",
        },
        // 4. Calculate totalAmount for each carts.
        {
          $addFields: {
            totalAmount: {
              $multiply: ["$productInfo.price", "$quantity"],
            },
          },
        },
      ],
      { session }
    );
    return items;
  }

  async getOrders(userID) {
    try {
      return await OrderModel.find({ userID: userID });
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something went wrong with database", 500);
    }
  }
}
