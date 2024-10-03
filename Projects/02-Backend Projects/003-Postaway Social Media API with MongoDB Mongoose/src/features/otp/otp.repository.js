import mongoose from "mongoose";
import nodemailer from "nodemailer";
import { userSchema } from "../user/user.schema.js";
import { ApplicationError } from "../../error-handler/applicationError.js";
const senderEmail = process.env.SENDER_EMAIL;
const senderPass = process.env.SENDER_PASSWORD;
let otp = "";
let isOtpMatched = false;
//creating model from schema
const UserModel = mongoose.model("User", userSchema);
export class OtpRepository {
  async verifyOtp(sentOtp) {
    if (sentOtp === otp) {
      isOtpMatched = true;
    }
    return isOtpMatched;
  }
  async resetPassword(userID, hashedPassword) {
    try {
      let user = await UserModel.findById({
        _id: userID,
      });
      if (user) {
        user.password = hashedPassword;
        user.save(); //update and save
      } else {
        throw new ApplicationError("No such user found", 500);
      }
    } catch (error) {
      console.log(error);
      throw new ApplicationError("Something went wrong with database", 500);
    }
  }
  async sendOtp(userID) {
    try {
      let user = await UserModel.findOne({
        _id: userID,
      });
      console.log("user data:-", user);
      console.log("user email:-", user.email);
      await this.sendMail(user.email);
    } catch (error) {
      console.log(error);
      throw new ApplicationError("Something went wrong with otp database", 500);
    }
  }
  async sendMail(userEmail) {
    //1.create an email transprter
    // SMTP (simple mail transfer protocol)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: senderEmail,
        pass: senderPass,
      },
    });
    //2. configure email content
    const mailOptions = {
      from: senderEmail,
      to: userEmail,
      subject: "Welcome to Social Media",
      text: this.getRandomOtp(),
    };
    // 3. send email
    try {
      const result = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
    } catch (err) {
      console.log("email failed to send:->", err);
      throw new ApplicationError(
        "Something went wrong with otp sendEmail function",
        500
      );
    }
  }
  getRandomOtp() {
    let digits = "01234567890123456789";

    for (let i = 0; i < 6; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }
    return otp;
  }
}
