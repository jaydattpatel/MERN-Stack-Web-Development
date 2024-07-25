import mongoose from "mongoose";
import { FriendShipRepository } from "./frndship.repository.js";
import { ApplicationError } from "../../error-handler/applicationError.js";

export class FriendShipController {
  constructor() {
    this.friendShipRepository = new FriendShipRepository();
  }
  async toggleFriendShip(req, res) {
    try {
      const friendID = req.params.friendID;
      const userID = req.userID;
      const pendingReq = await this.friendShipRepository.toggleFrndReq(
        friendID,
        userID
      );
      res.status(201).send(pendingReq);
    } catch (error) {
      console.log(error);
      throw new ApplicationError(
        "Something went wrong with frndship controller",
        500
      );
    }
  }
  async getPendingReq(req, res) {
    try {
      const userID = req.userID;
      const pendingReq = await this.friendShipRepository.getPendingReq(userID);
      if (pendingReq) {
        res.status(201).send(pendingReq);
      } else {
        res.status(404).send("There is no pending request!!");
      }
    } catch (error) {
      console.log(error);
      throw new ApplicationError(
        "Something went wrong with frndship controller",
        500
      );
    }
  }
  async responseToReq(req, res) {
    try {
      const userID = req.userID;
      const friendID = req.params.friendID;
      await this.friendShipRepository.responseToReq(userID, friendID);
      res.status(201).send("updated successfully!!");
    } catch (error) {
      console.log(error);
      throw new ApplicationError(
        "Something went wrong with frndship controller",
        500
      );
    }
  }
  async getFriends(req, res) {
    try {
      const userID = req.params.userID;
      const friends = await this.friendShipRepository.getFriends(userID);
      if (friends) {
        res.status(201).send(friends);
      } else {
        res.status(404).send("No friends of this user");
      }
    } catch (error) {
      console.log(error);
      throw new ApplicationError(
        "Something went wrong with frndship controller",
        500
      );
    }
  }
}
