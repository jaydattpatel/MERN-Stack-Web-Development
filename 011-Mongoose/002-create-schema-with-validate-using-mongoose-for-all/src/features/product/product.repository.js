import { ObjectId } from "mongodb";
import { eCommerceDB } from "../../config/mongodb.js";
import { ApplicationError } from "../../middlewares/errorHandler.js";

export default class ProductRepository {
  collection = "products";

  async getAll() {
    try {
      const products = eCommerceDB(this.collection);
      const all = await products.find().toArray();
      return all;
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something went wrong with database", 500);
    }
  }

  async add(product) {
    try {
      const products = eCommerceDB(this.collection);
      await products.insertOne(product);
      return product;
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something went wrong with database", 500);
    }
  }

  async get(id) {
    try {
      const products = eCommerceDB(this.collection);
      return await products.findOne({ _id: new ObjectId(id) });
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something went wrong with database", 500);
    }
  }

  async filter(minPrice, maxPrice, category) {
    try {
      const products = eCommerceDB(this.collection);
      let filterObj = {};
      if (minPrice) {
        filterObj.price = { $gte: parseFloat(minPrice) };
      }
      if (maxPrice) {
        filterObj.price = {
          ...filterObj.price,
          $lte: parseFloat(maxPrice),
        };
      }
      if (category) {
        filterObj.category = category;
      }
      console.log(filterObj);
      const result = await products.find(filterObj).toArray();
      return result;
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something went wrong with database", 500);
    }
  }

  async rateProduct(userId, productId, rate) {
    try {
      const users = eCommerceDB("users");
      const user = await users.findOne({ _id: new ObjectId(userId) });
      if (!user) {
        return "User not found...!";
      }

      const products = eCommerceDB(this.collection);
      const product = await products.findOne({ _id: new ObjectId(productId) });
      if (!product) {
        return "Product not found";
      }
      // find product and remove($pull) existing rating
      await products.updateOne(
        { _id: new ObjectId(productId) },
        {
          $pull: { ratings: { userId: new ObjectId(userId) } },
        }
      );

      // find product and add($push) new rating
      await products.updateOne(
        { _id: new ObjectId(productId) },
        {
          $push: { ratings: { userId: new ObjectId(userId), rate } },
        }
      );
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something went wrong with database", 500);
    }
  }
}
