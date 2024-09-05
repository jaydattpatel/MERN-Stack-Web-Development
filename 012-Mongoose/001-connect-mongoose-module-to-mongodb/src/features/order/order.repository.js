import { ObjectId } from "mongodb";
import { eCommerceDB, getClient } from "../../config/mongodb.js";
import OrderModel from "./order.model.js";
import { ApplicationError } from "../../middlewares/errorHandler.js";

export default class OrderRepository {
  collection = "orders";

  async placeOrder(userId) {
    const client = getClient();
    const session = client.startSession();

    try {
      await session.startTransaction();

      const orders = eCommerceDB(this.collection);
      // 1. Get carts and calculate total amount.
      const items = await this.getTotalAmount(userId, session);
      const finalTotalAmount = items.reduce(
        (acc, item) => acc + item.totalAmount,
        0
      );
      // console.log(items, "\n", finalTotalAmount);

      // 2. Create an order record.
      const newOrder = new OrderModel(
        new ObjectId(userId),
        finalTotalAmount,
        new Date()
      );
      await orders.insertOne(newOrder, { session });

      // 3. Reduce the stock in product collection.
      for (let item of items) {
        await eCommerceDB("products").updateOne(
          { _id: item.productID },
          // reduce stock by negative value increment
          { $inc: { stock: -item.quantity } },
          { session }
        );
      }
      // throw new Error("Something is wrong in placeOrder");
      // 4. Clear the cart items from carts collection.
      await eCommerceDB("carts").deleteMany(
        {
          userID: new ObjectId(userId),
        },
        { session }
      );

      await session.commitTransaction();
    } catch (err) {
      console.log(err);
      await session.abortTransaction(); // if err then abort transaction
      throw new ApplicationError(500, "Transaction Aborted.");
    } finally {
      await session.endSession();
    }
  }

  async getTotalAmount(userId, session) {
    const items = await eCommerceDB("carts")
      .aggregate(
        [
          // 1. select all cart items for the userId
          {
            $match: { userID: new ObjectId(userId) },
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
      )
      .toArray();
    return items;
  }
}
