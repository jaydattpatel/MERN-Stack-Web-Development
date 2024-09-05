import jwt from "jsonwebtoken";
import { ApplicationError } from "../../middlewares/errorHandler.js";
import UserRepository from "./user.repository.js";
import bcrypt from "bcrypt";

const userRepo = new UserRepository();

export default class UserController {
  async signUp(req, res) {
    const { name, email, password, type } = req.body;
    // now set salt value between 8 to 15. If value is more than 15 then it will take more than 1 hour or days to decrypt hash code.
    const salt = 12;
    const passwordHashed = await bcrypt.hash(password, salt);
    const user = {
      name: name,
      email: email,
      password: passwordHashed,
      type: type,
    };
    await userRepo.signUp(user);
    res.status(201).send(user);
  }

  async signIn(req, res, next) {
    try {
      const user = await userRepo.findByEmail(req.body.email);
      if (!user) {
        throw new ApplicationError(400, "Incorrect Credentials...!");
      } else {
        // 2. Compare password password with hashed password.
        const result = await bcrypt.compare(req.body.password, user.password);
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
}
