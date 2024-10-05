//manage routes/paths to userController
//import express
import express from "express";
import { FriendShipController } from "./frndship.controller.js";
import jwtAuth from "../../middlewares/jwt.middleware.js";
import authenticateToken from "../../middlewares/checkBlacklistedToken.js";

//get router initialize
const friendShipRouter = express.Router();
const friendShipController = new FriendShipController();
friendShipRouter.post(
  "/toggle-friendship/:friendID",
  authenticateToken,
  jwtAuth,
  (req, res, next) => {
    friendShipController.toggleFriendShip(req, res, next);
  }
);
friendShipRouter.get(
  "/get-pending-requests",
  authenticateToken,
  jwtAuth,
  (req, res, next) => {
    friendShipController.getPendingReq(req, res, next);
  }
);
friendShipRouter.post(
  "/response-to-request/:friendID",
  authenticateToken,
  jwtAuth,
  (req, res, next) => {
    friendShipController.responseToReq(req, res, next);
  }
);
friendShipRouter.get(
  "/get-friends/:userID",
  authenticateToken,
  jwtAuth,
  (req, res, next) => {
    friendShipController.getFriends(req, res, next);
  }
);

export default friendShipRouter;
