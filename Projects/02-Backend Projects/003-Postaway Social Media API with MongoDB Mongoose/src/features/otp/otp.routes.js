//manage routes/paths to userController
//import express
import express from 'express';

import jwtAuth from '../../middlewares/jwt.middleware.js';
import { OtpController } from './otp.controller.js';
import authenticateToken from '../../middlewares/checkBlacklistedToken.js';
// import { LikeController } from './like.controller.js';

//get router initialize 
const otpRouter=express.Router();
const otpController=new OtpController();
otpRouter.post("/send",jwtAuth,(req,res)=>{
    otpController.sendOtp(req,res);
})
otpRouter.get("/verify/:otp",authenticateToken,jwtAuth,(req,res)=>{
    otpController.verifyOtp(req,res)});
 otpRouter.post("/reset-password",authenticateToken,jwtAuth,(req,res)=>{
        otpController.resetPassword(req,res)});

export default otpRouter;