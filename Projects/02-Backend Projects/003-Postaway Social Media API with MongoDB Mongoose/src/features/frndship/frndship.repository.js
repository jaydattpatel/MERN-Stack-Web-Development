import mongoose from "mongoose";
import { ApplicationError } from "../../error-handler/applicationError.js";
import { friendRequestSchema } from "./frndship.schema.js";
import { userFriendSchema } from "./frndship.userFrnd.schema.js";

//creating model from schema
const FriendReqModel = mongoose.model("FriendShip", friendRequestSchema);
const userFriendModel = mongoose.model("UserFriend", userFriendSchema);
export class FriendShipRepository {
  async getFriends(userID) {
    const user = await userFriendModel
      .findOne({
        userID: userID,
      })
      .populate("friendID", "_id name email");
    if (!user) {
      return null;
    }
    return user.friendID;
  }
  async responseToReq(userID, friendID) {
    // initialize a session
    const session = await mongoose.startSession();
    // start transaction
    session.startTransaction();
    try {
      const haveFrndReq = await FriendReqModel.findOne({
        friendID: userID,
        friendReqID: friendID,
      });
      console.log("already have pending request", haveFrndReq);
      const user = await userFriendModel.findOne({
        userID: userID,
      });
      console.log("already have user", user);
      // let returnUser;
      if (haveFrndReq) {
        await FriendReqModel.updateOne(
          { friendID: userID },
          { $pull: { friendReqID: friendID } },
          { session }
        );
        // haveFrndReq.friendReqID.pull(friendID);
        // await haveFrndReq.save();

        // let userFrnd;
        if (!user) {
          await userFriendModel.create(
            {
              userID: userID,
              friendID: friendID,
            },
            { session }
          );
        } else {
          await userFriendModel.updateOne(
            { userID: userID },
            { $push: { friendID: friendID } },
            { session }
          );
          // user.friendID.push(friendID);
          // returnUser= await user.save();
        }
        await session.commitTransaction();
        session.endSession();
      }
    } catch (error) {
      console.log(error);
      await session.abortTransaction();
      session.endSession();
      throw new ApplicationError(
        "Something went wrong with frndship database",
        500
      );
    }
  }
  async toggleFrndReq(friendID, userID) {
    try {
      const existedFriendId = await FriendReqModel.findOne({
        friendID: friendID,
      });
      console.log("already have friend id", existedFriendId);
      const haveFrndReq = await FriendReqModel.findOne({
        friendID: friendID,
        friendReqID: userID,
      });
      console.log("already have pending request", haveFrndReq);
      if (haveFrndReq) {
        haveFrndReq.friendReqID.pull(userID);
        return await haveFrndReq.save();
      } else if (existedFriendId) {
        existedFriendId.friendReqID.push(userID);
        return await existedFriendId.save();
      } else {
        const pendingReq = await FriendReqModel.create({
          friendID: friendID,
          friendReqID: userID,
        });
        return await pendingReq.save();
      }
    } catch (error) {
      console.log(error);
      throw new ApplicationError(
        "Something went wrong with frndship database",
        500
      );
    }
  }
  async getPendingReq(userID) {
    try {
      const existedFriendId = await FriendReqModel.findOne({
        friendID: userID,
      });
      if (existedFriendId) {
        // existedFriendId.friendReqID.push(userID);
        return existedFriendId;
      }
    } catch (error) {
      console.log(error);
      throw new ApplicationError(
        "Something went wrong with frndship database",
        500
      );
    }
  }
}
