//manage routes/paths to userController
//import express
import express from "express";
import { UserController } from "./user.controller.js";
import jwtAuth from "../../middlewares/jwt.middleware.js";
import { uploadA } from "../../middlewares/file-upload.middlware.js";
import authenticateToken from "../../middlewares/checkBlacklistedToken.js";

//get router initialize
const userRouter = express.Router();
const userController = new UserController();

//all the path to controller methods
userRouter.post("/signup", uploadA.single("avatar"), (req, res, next) => {
  userController.signUpController(req, res, next);
});
userRouter.post("/signin", (req, res, next) => {
  userController.signInController(req, res, next);
});
userRouter.post("/signout", jwtAuth, (req, res, next) => {
  userController.signOutController(req, res, next);
});
userRouter.post("/signout-from-all", jwtAuth, (req, res, next) => {
  userController.signOutFromAllDevice(req, res, next);
});
userRouter.get(
  "/get-details/:userID",
  authenticateToken,
  jwtAuth,
  (req, res, next) => {
    userController.getById(req, res, next);
  }
);
userRouter.get(
  "/get-all-details",
  authenticateToken,
  jwtAuth,
  (req, res, next) => {
    userController.getAll(req, res, next);
  }
);
userRouter.put(
  "/update-details",
  authenticateToken,
  jwtAuth,
  uploadA.single("avatar"),
  (req, res, next) => {
    userController.update(req, res, next);
  }
);

export default userRouter;
