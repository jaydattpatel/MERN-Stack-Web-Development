import { ApplicationError } from "../../middlewares/errorHandler.js";
import UserModel from "../user/user.schema.js";

import mongoose from "mongoose";
import ProductModel from "./product.schema.js";

export default class ProductRepository {
  collection = "products";

  async getAll() {
    try {
      return await ProductModel.find();
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something went wrong with database", 500);
    }
  }

  async add(product) {
    try {
      const newProduct = new ProductModel(product);
      await newProduct.save();
      return newProduct;
    } catch (err) {
      console.log(err);
      if (err instanceof mongoose.Error.ValidationError) {
        throw err;
      } else {
        throw new ApplicationError("Something went wrong with database", 500);
      }
    }
  }

  async getById(id) {
    try {
      return await ProductModel.findOne({
        _id: id,
      });
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something went wrong with database", 500);
    }
  }

  async filter(minPrice, maxPrice, category) {
    try {
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
      // console.log(filterObj);
      const result = await ProductModel.find(filterObj);
      return result;
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something went wrong with database", 500);
    }
  }

  async rateProduct(userId, productId, rate) {
    try {
      const user = await UserModel.findOne({ _id: userId });
      if (!user) {
        return "User not found...!";
      }
      const product = await ProductModel.findOne({
        _id: productId,
      });
      if (!product) {
        return "Product not found";
      }
      // find product and remove($pull) existing rating
      await ProductModel.updateOne(
        { _id: productId },
        {
          $pull: { ratings: { userId: userId } },
        }
      );

      // find product and add($push) new rating
      await ProductModel.updateOne(
        { _id: productId },
        {
          $push: { ratings: { userId: userId, rate: rate } },
        }
      );
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something went wrong with database", 500);
    }
  }
}
