// 1. Import express.
import express from "express";
import UserController from "./user.controller.js";
import jwtAuthorization from "../../middlewares/jwtAuthorization.js";

// 2. Initialize Express router.
const userRouter = express.Router();
const userController = new UserController();

// All the paths to controller methods.
userRouter.post("/signup", userController.signUp);
userRouter.post("/signin", userController.signIn);
userRouter.put(
  "/resetPassword",
  jwtAuthorization,
  userController.resetPassword
);

export default userRouter;
