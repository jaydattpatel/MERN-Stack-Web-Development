import { ApplicationError } from "../../middlewares/errorHandler.js";
import mongoose from "mongoose";
import LikeModel from "./like.schema.js";

export default class LikeRepository {
  async likeToggle(userID, DB, likableID) {
    try {
      const likeData = {
        userID,
        DB,
        likableID,
      };
      const like = await LikeModel.findOne(likeData);
      if (!like) {
        const newLike = new LikeModel(likeData);
        await newLike.save();
        return { added: newLike };
      } else {
        const deletedLike = await like.deleteOne();
        return { removed: deletedLike };
      }
    } catch (err) {
      console.log(err);
      if (err instanceof mongoose.Error.ValidationError) {
        throw err;
      } else {
        throw new ApplicationError("Something went wrong with database", 500);
      }
    }
  }
  async getLikes(userID) {
    try {
      return await LikeModel.find({
        userID: userID,
      });
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something went wrong with database", 500);
    }
  }
}
