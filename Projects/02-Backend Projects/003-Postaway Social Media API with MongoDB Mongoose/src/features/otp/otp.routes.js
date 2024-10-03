//manage routes/paths to userController
//import express
import express from "express";

import jwtAuth from "../../middlewares/jwt.middleware.js";
import { OtpController } from "./otp.controller.js";
import authenticateToken from "../../middlewares/checkBlacklistedToken.js";
// import { LikeController } from './like.controller.js';

//get router initialize
const otpRouter = express.Router();
const otpController = new OtpController();
otpRouter.post("/send", jwtAuth, (req, res, next) => {
  otpController.sendOtp(req, res, next);
});
otpRouter.get("/verify/:otp", authenticateToken, jwtAuth, (req, res, next) => {
  otpController.verifyOtp(req, res, next);
});
otpRouter.post(
  "/reset-password",
  authenticateToken,
  jwtAuth,
  (req, res, next) => {
    otpController.resetPassword(req, res, next);
  }
);

export default otpRouter;
