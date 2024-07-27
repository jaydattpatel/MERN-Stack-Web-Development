import { ApplicationError } from "../../middlewares/errorHandler.js";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import UserModel from "./user.schema.js";

class UserRepository {
  async signUp(user) {
    try {
      // create instance of model.
      console.log(user);
      const newUser = new UserModel(user);
      await newUser.save();
      return newUser;
    } catch (err) {
      console.log(err);
      if (err.name == "MongoServerError") {
        throw new ApplicationError(
          500,
          "Email id or Mobile number is duplicate."
        );
      } else if (err instanceof mongoose.Error.ValidationError) {
        throw err;
      } else {
        throw new ApplicationError(500, "Something went wrong with database");
      }
    }
  }

  async findByEmail(email) {
    try {
      return await UserModel.findOne({ email });
    } catch (err) {
      console.log(err);
      throw new ApplicationError(500, "Something went wrong with database");
    }
  }

  async resetPassword(userID, password) {
    try {
      const salt = 12;
      const passwordHashed = await bcrypt.hash(password, salt);
      return await UserModel.findOneAndUpdate(
        { _id: userID },
        { $set: { password: passwordHashed } },
        { new: true }
      );
    } catch (err) {
      console.log(err);
      if (err instanceof mongoose.Error.ValidationError) {
        throw err;
      } else {
        throw new ApplicationError(500, "Something went wrong with database");
      }
    }
  }
}

export default UserRepository;
