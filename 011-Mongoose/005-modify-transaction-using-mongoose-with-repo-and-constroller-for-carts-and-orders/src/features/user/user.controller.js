import jwt from "jsonwebtoken";
import { ApplicationError } from "../../middlewares/errorHandler.js";
import UserRepository from "./user.repository.js";
import bcrypt from "bcrypt";

const userRepo = new UserRepository();

export default class UserController {
  async signUp(req, res, next) {
    try {
      const { name, email, password, mobile, type } = req.body;
      const user = await userRepo.signUp({
        name,
        email,
        password,
        mobile,
        type,
      });
      res.status(201).send(user);
    } catch (err) {
      next(err);
    }
  }

  async signIn(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw new ApplicationError(400, "No Inputs found...!");
      }
      const user = await userRepo.findByEmail(email);
      if (!user) {
        throw new ApplicationError(400, "Incorrect Credentials...!");
      } else {
        // 2. Compare password password with hashed password.
        const result = await bcrypt.compare(password, user.password);
        if (!result) {
          throw new ApplicationError(400, "Incorrect Credentials...!");
        } else {
          // syntax: jwt.sign(payload, secretKey, [options, callback])
          const payload = { userId: user._id, email: user.email };
          //using environment variable
          const privateKey = process.env.JWT_SECRET;
          const options = { expiresIn: "10h" }; //60 means 60ms, "2 days", "10h", "7d"

          const token = jwt.sign(payload, privateKey, options);
          res.cookie("jwtToken", token); // add token in cookie
          return res.status(200).send(token);
        }
      }
    } catch (err) {
      next(err);
    }
  }

  async resetPassword(req, res, next) {
    try {
      const { password } = req.body;
      const valid =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          password
        );
      if (valid) {
        const user = await userRepo.resetPassword(req.userID, password);
        res.status(200).json({ updated: user });
      } else {
        res
          .status(400)
          .send(
            "\nPassword must : \nContains at least one lowercase letter.\nContains at least one uppercase letter.\nContains at least one digit.\nContains at least one special character from the set @$!%*?&.\nIt is at least 8 characters long.\n"
          );
      }
    } catch (err) {
      next(err);
    }
  }
}
