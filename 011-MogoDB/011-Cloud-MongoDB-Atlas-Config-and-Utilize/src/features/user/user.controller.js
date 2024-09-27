import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";
import { ApplicationError } from "../../middlewares/errorHandler.js";
import UserRepository from "./user.repository.js";

const userRepo = new UserRepository();

export default class UserController {
  async signUp(req, res, next) {
    const { name, email, password, type } = req.body;
    const user = new UserModel(name, email, password, type);
    await userRepo.signUp(user);
    res.status(201).send(user);
  }

  async signIn(req, res, next) {
    try {
      const result = await userRepo.signIn(req.body.email, req.body.password);
      if (!result) {
        // return res.status(400).send('Incorrect Credentials...!');
        throw new ApplicationError(400, "Incorrect Credentials...!");
      } else {
        // syntax: jwt.sign(payload, secretKey, [options, callback])
        const payload = { userId: result._id, email: result.email };
        const privateKey = "AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz";
        const options = { expiresIn: "10h" }; //60 means 60ms, "2 days", "10h", "7d"

        const token = jwt.sign(payload, privateKey, options);
        // add token in cookie
        res.cookie("jwtToken", token);

        return res.status(200).send(token);
      }
    } catch (err) {
      next(err);
    }
  }
}
