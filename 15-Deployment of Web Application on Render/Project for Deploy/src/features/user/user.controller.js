import UserModel from "./user.model.js";
import UserRepository from "./user.repository.js";

const userRepo = new UserRepository();

export default class UserController {
  async signUp(req, res, next) {
    const { name, email, password } = req.body;
    const user = new UserModel(name, email, password);
    await userRepo.signUp(user);
    res.status(201).json({ success: user });
  }
}
