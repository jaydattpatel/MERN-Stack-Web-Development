import express from "express";
import UserController from "./user.controller.js";

const userRoutes = express.Router();

userRoutes.post("/signup", UserController.signup);
userRoutes.post("/signin", UserController.signin);

export default userRoutes;
