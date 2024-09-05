// 1. Import express.
import express from "express";
import UserController from "./user.controller.js";

// 2. Initialize Express router.
const userRouter = express.Router();
const userController = new UserController();

// All the paths to controller methods.
userRouter.post("/signup", userController.signUp);
userRouter.post("/signin", userController.signIn);

export default userRouter;
