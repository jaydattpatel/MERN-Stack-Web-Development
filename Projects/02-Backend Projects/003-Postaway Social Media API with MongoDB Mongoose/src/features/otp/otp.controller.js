import { ApplicationError } from "../../error-handler/applicationError.js";
import { OtpRepository } from "./otp.repository.js";

import bcrypt from 'bcrypt';
let isOtpMatch=false;
export class OtpController{
    constructor(){
        this.otpRepository=new OtpRepository();
    }
    async sendOtp(req,res){
        try {
            const userID=req.userID;
            console.log("user:-",userID);
            await this.otpRepository.sendOtp(userID);
            res.status(201).send("OTP is sent");
        } catch (error) {
            console.log(error);
            throw new ApplicationError("Something went wrong with otp controller ",500); 
        }
    }
    async verifyOtp(req,res){
        try {
            // const userID=req.userID;
            const otp=req.params.otp;
            isOtpMatch= await this.otpRepository.verifyOtp(otp); 
           console.log(isOtpMatch);
        //    req.cookies.isOtpMatch=true;
            if(isOtpMatch){
                res.status(201).send("otp is varified");
            }else{
                res.status(404).send("otp is not matched");
            }
        } catch (error) {
            console.log(error);
            throw new ApplicationError("Something went wrong with otp controller ",500); 
        }
     
    }
   async resetPassword(req,res){
       
            const {newPassword}=req.body;
            ///hash password
            const hashPassword=await bcrypt.hash(newPassword,13);
            const userID=req.userID;
            // console.log(req.isOtpMatch);
            try {

                if(isOtpMatch){
                    await this.otpRepository.resetPassword(userID,hashPassword);
                   isOtpMatch=false;
                    res.status(201).send("Password is updated");
                }else{
                    res.status(404).send("sent a new otp please");
                }
           
            } catch (error) {
              console.log(error);
              // throw new ApplicationError("Something went wrong with signup controller ",500);
              console.log("Passing error to middleware");
              // next(error);
            }
        
        }
}