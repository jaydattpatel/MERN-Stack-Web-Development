import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "user name is requires"],
    maxLength: [30, "user name can't exceed 30 characters"],
    minLength: [2, "name should have atleast 2 charcters"],
  },
  email: {
    type: String,
    required: [true, "user email is requires"],
    unique: true,
    validate: [validator.isEmail, "pls enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    select: false,
  },
  profileImg: {
    public_id: {
      type: String,
      required: true,
      default: "1234567890",
    },
    url: {
      type: String,
      required: true,
      default: "this is dummy avatar url",
    },
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  //  hash user password before saving using bcrypt
  const passwordHashed = await bcrypt.hash(this.password, 10);
  this.password = passwordHashed;
});

// JWT Token
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_Secret, {
    expiresIn: process.env.JWT_Expire,
  });
};
// user password compare
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// generatePasswordResetToken
userSchema.methods.getResetPasswordToken = async function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  // hashing and updating user resetPasswordToken
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const UserModel = mongoose.model("User", userSchema);
export default UserModel;
